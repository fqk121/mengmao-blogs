<template>
  <el-header class="me-area">
    <el-row class="me-header">
      <el-col :span="2" class="me-header-left">
        <router-link to="/" class="me-title">
          <img class="cat" src="../assets/img/newlogo.jpg" />
        </router-link>
        <strong>MOEB CAT</strong>
      </el-col>
      <el-col v-if="!simple" :span="12">
        <el-menu
          :router="true"
          menu-trigger="click"
          active-text-color="#5FB878"
          :default-active="activeIndex"
          mode="horizontal"
          background-color="rgba(255, 255, 255, 0)"
          text-color="aliceblue"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/category/all">文章分类</el-menu-item>
          <el-menu-item index="/tag/all">标签</el-menu-item>
          <el-menu-item index="/archives">文章归档</el-menu-item>
          <el-col :span="4" :offset="4" class="writer">
            <el-menu-item index="/write"
              ><i class="el-icon-edit"></i>写文章</el-menu-item
            >
          </el-col>
          <div class="data">{{ nowdate }}，{{ nowtime }}，萌猫欢迎您！</div>
        </el-menu>
      </el-col>
      <template v-else>
        <slot></slot>
      </template>
      <el-col :span="6">
        <el-menu
          mode="horizontal"
          active-text-color="#5FB878"
          background-color="rgba(255, 255, 255, 0)"
        >
        </el-menu>
      </el-col>
      <el-col :span="4">
        <el-menu
          :router="true"
          menu-trigger="click"
          mode="horizontal"
          active-text-color="#5FB878"
          background-color="rgba(255, 255, 255, 0)"
        >
          <template v-if="!user.login">
            <el-menu-item index="/login">
              <el-button type="text">登录</el-button>
            </el-menu-item>
            <el-menu-item index="/register">
              <el-button type="text">注册</el-button>
            </el-menu-item>
          </template>
          <template v-else>
            <el-submenu index>
              <template slot="title">
                <img class="me-header-picture" :src="user.avatar" />
              </template>
              <el-menu-item index @click="logout"
                ><i class="el-icon-back"></i>退出</el-menu-item
              >
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import { searchArticle } from "@/api/article";
export default {
  name: "BaseHeader",
  props: {
    activeIndex: String,
    simple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      search: "",
      articles: [],
      newTimer: "",
      nowdate: "",
      nowtime: ""
    };
  },
  computed: {
    user() {
      let login = this.$store.state.account.length != 0;
      let avatar = this.$store.state.avatar;
      return {
        login,
        avatar
      };
    }
  },
  methods: {
    logout() {
      let that = this;
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push({ path: "/" });
        })
        .catch(error => {
          if (error !== "error") {
            that.$message({ message: error, type: "error", showClose: true });
          }
        });
    },
    querySearchAsync(queryString, cb) {
      searchArticle(this.search).then(res => {
        if (res.success) {
          var results = [];
          for (const item of res.data) {
            results.push({
              id: item.id,
              value: item.title
            });
          }
          cb(results);
        }
      });
    },
    handleSelect(item) {
      this.$router.push({ path: "/view/" + item.id });
    },
    getNowDate() {
      const timeOne = new Date();
      const year = timeOne.getFullYear();
      let month = timeOne.getMonth() + 1;
      let day = timeOne.getDate();
      let wk = timeOne.getDay();
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ];
      let week = weeks[wk];
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      this.nowdate = `${year}年${month}月${day}日，${week}`;
      let h = timeOne.getHours();
      h = h < 10 ? "0" + h : h;
      let m = timeOne.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = timeOne.getSeconds();
      s = s < 10 ? "0" + s : s;
      this.nowtime = `${h}:${m}:${s}`;
    }
  },
  mounted() {
    //执行日期函数
    this.getNowDate();
    //清除定时器
    clearInterval(this.newTimer);
    // 定时获取时间
    this.newTimer = setInterval(this.getNowDate, 1000);
  },
  beforeRouteLeave(to, from, next) {
    // 离开组件时停掉定时器，节省内存
    clearInterval(this.newTimer);
    next();
  }
};
</script>

<style>
.el-header {
  position: fixed;
  z-index: 1024;
  min-width: 100%;
  /* box-shadow: 0 2px 3px hsla(0, 0%, 7%, 0.1), 0 0 0 1px hsla(0, 0%, 7%, 0.1); */
  background-color: rgba(255, 255, 255, 0);
  border: 0;
  border-bottom: 1px solid #f9f9f9f9;
  box-shadow: 0 0 10px #ff00 !important;
}

.me-title {
  margin-top: 10px;
  font-size: 24px;
}

.me-header-left {
  margin-top: 10px;
  /* color: #909399; */
  font-size: 15px;
  color: #5fb878;
}

.me-title img {
  max-height: 2.6rem;
  max-width: 100%;
}

.me-header-picture {
  width: 36px;
  height: 36px;
  border: 1px solid #ddd;
  border-radius: 50%;
  vertical-align: middle;
  background-color: #5fb878;
  box-shadow: 0 2px 3px black;
}

.cat {
  margin-left: 10px;
}

.el-menu {
  border: 0;
  /* border-bottom: 1px white solid; */
}

.data {
  color: aliceblue;
  margin-top: 20px;
}

.writer {
  margin-left: 10px;
}
</style>
