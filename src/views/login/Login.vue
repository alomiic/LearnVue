<template>
  <div id="login">
    <nav-bar class="nav_bar">
      <div @click="quitClick" slot="left">×</div>
      <div slot="center">登录</div>
    </nav-bar>
    <div class="login_data">
      <div class="login_from">
        <span for="username">用户名：</span>
        <el-input v-model="username" placeholder="请输入用户名" class="username" name="username"></el-input>
        <span for="username">密码：</span>
        <el-input placeholder="请输入密码" v-model="password" show-password class="pwd" name="password"></el-input>
        <el-alert v-show="isShow" :title="alertInfo[currentIndex].title" :type="alertInfo[currentIndex].type" show-icon class="prompt_box"></el-alert>

      </div>
      <el-button plain class="login_btn" @click="isLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
export default {
  name: "Login",
  components: {
    NavBar
  },
  data() {
    return {
      username: "",
      password: "",
      isShow:false,
      currentIndex:1,
      alertInfo:[
        {
          type:'success',
          title:'登录成功'
        },
        {
          type:'warning',
          title:'提示：用户名或密码不能为空'
        }
      ]
    };
  },
  created(){
    
  },
  methods: {
    quitClick() {
      this.$router.push("/profile");
    },
    isLogin() {
      if (this.username.trim().length > 0 && this.password.trim().length > 0) {
        console.log("登录成功");
        // this.isShow = true
        this.currentIndex = 0
        setTimeout(() => {
          this.isShow = false
          this.username = ''
          this.password = ''
          this.currentIndex = 1
          this.$router.push("/profile");
        }, 700);
      } else {
        console.log("登录失败");
        this.isShow = true
      }
    }
  }
};
</script>

<style scoped>
#login {
  position: relative;
  width: 100%;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
}
.nav_bar {
  background-color: #fff;
  color: #000;
  font-size: 18px;
  border-bottom: 1px solid #eee;
}
.login_from {
  width: 300px;
  margin: 100px auto;
  padding: 10px;
}
.login_from .username,
.login_from .pwd {
  width: 100%;
  height: 30px;
  margin: 20px 0;
}
span {
  text-align: center;
  display: inline-block;

  padding-top: 7px;
}
.prompt_box{
  margin-top: 5px;
}
.login_btn {
  position: absolute;
  /* top: 60%; */
  left: 50%;
  transform: translate(-50%, 0);
}
</style>