// 渲染个人网站信息栏
<template>
  <el-card>
    <h1 class="me-author-name">个人网站</h1>
    <div class="me-author-description">
      <span><i class="el-icon-location-outline"></i> &nbsp;杭州&浙江</span>
      <span><i class="me-icon-job"></i> &nbsp;记录美好</span>
    </div>
    <div class="me-author-tool">
      <i @click="showTool(qq)" :title="qq.title" class="iconfont icon-qq"></i>
      <i
        @click="showTool(bilibili)"
        :title="bilibili.title"
        class="iconfont icon-bilibili-fill"
      ></i>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "CardMe",
  data() {
    return {
      qq: { title: "QQ", message: "1723383638" },
      bilibili: {
        title: "哔哩哔哩",
        message:
          '<a target="_blank" href="https://space.bilibili.com/1957774670">https://space.bilibili.com/1957774670</a>'
      }
    };
  },
  methods: {
    showTool(tool) {
      this.$message({
        duration: 0,
        showClose: true,
        dangerouslyUseHTMLString: true,
        message: "<strong>" + tool.message + "</strong>"
      });
    }
  }
};
</script>

<style scoped>
.me-author-name {
  text-align: center;
  font-size: 30px;
  border-bottom: 1px solid #5fb878;
}

.me-author-description {
  padding: 8px 0;
}

.me-icon-job {
  padding-left: 16px;
}

.me-author-tool {
  text-align: center;
  padding-top: 10px;
}

.me-author-tool i {
  cursor: pointer;
  padding: 4px 10px;
  font-size: 30px;
}
</style>
