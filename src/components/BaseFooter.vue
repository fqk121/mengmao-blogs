// 底部栏
<template>
  <el-footer class="me-area">
    <div class="me-footer">
      <p>
        <strong>
          <router-link to="/" class="me-login-design-color"
            >萌猫博客
            <div class="cat"><img src="../assets/img/weblogo.jpg" alt="" /></div
          ></router-link>
        </strong>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;细腻的美好，藏在生活各处！
      </p>
      <!-- <div class="add">
        <li><a href="">联系我们</a></li>
        <li>|</li>
        <li><a href="">帮助中心</a></li>
        <li>|</li>
        <li><a href="">常见问题</a></li>
        <li>|</li>
        <li><a href="">关于萌猫</a></li>
        <li>|</li>
        <li><a href="">违规投诉</a></li>
        <li>|</li>
        <li><a href="">备案信息</a></li>
      </div> -->
    </div>
  </el-footer>
</template>

<script>
export default {
  name: "BaseFooter",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style>
.el-footer {
  min-width: 100%;
  box-shadow: 0 -2px 3px black;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1024;
  background-color: rgba(255, 255, 255, 0);
  /* border: 0.5px aliceblue solid; */
  border-top: 1px white solid;
}

.me-footer {
  text-align: center;
  /* line-height: 60px; */
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
}

.me-login-design-color {
  color: #5fb878 !important;
}

p {
  display: inline-block;
  margin: 5px 0px;
  color: #5fb878;
}
.add {
  font-size: 10px;
  height: 15px;
  margin: 0;
  padding: 0;
}
.add li {
  display: inline-block;
  margin: 0 30px;
}

a {
  color: #939393;
}

.cat {
  float: left;
  margin-right: 5px;
  margin-top: -3px;
}
.cat img {
  width: 30px;
  height: 30px;
}
</style>
