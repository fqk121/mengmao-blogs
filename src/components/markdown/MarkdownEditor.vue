// vue的markdown编辑器
<template>
  <mavon-editor
    class="me-editor"
    ref="md"
    v-model="editor.value"
    @imgAdd="imgAdd"
    v-bind="editor"
  >
  </mavon-editor>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { upload } from "@/api/upload";
export default {
  name: "MarkdownEditor",
  props: {
    editor: Object
  },
  data() {
    return {};
  },
  mounted() {
    this.$set(this.editor, "ref", this.$refs.md);
  },
  methods: {
    imgAdd(pos, $file) {
      let that = this;
      let formdata = new FormData();
      formdata.append("image", $file);
      // 第一步，将图片上传到服务器
      upload(formdata)
        .then(data => {
          // 第二步，返回一个url替换原来的位置
          if (data.success) {
            that.$refs.md.$img2Url(pos, data.data);
          } else {
            that.$message({
              message: data.msg,
              type: "error",
              showClose: true
            });
          }
        })
        .catch(err => {
          that.$message({ message: err, type: "error", showClose: true });
        });
    }
  },
  components: {
    mavonEditor
  }
};
</script>
<style scoped>
.me-editor {
  z-index: 6 !important;
}

.v-note-wrapper.fullscreen {
  top: 60px !important;
}
</style>
