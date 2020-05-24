<template>
  <div id="profile">
    <nav-bar class="profile_navbar">
      <div slot="center">我的</div>
    </nav-bar>
    <div class="user">
      <img src="~/assets/img/svgman.svg" alt class="svgman" />
      <span class="user_name">登录 / 注册</span>
      <span class="user_login" @click="pushClick">＞</span>
    </div>
    <div class="profile_info">
      <section class="account">
        <div class="account-item">
          <div class="number">
            <span class="balance">0.00</span>元
          </div>
          <div class="account-info">我的余额</div>
        </div>
        <div class="account-item">
          <div class="number">
            <span class="balance">0</span>个
          </div>
          <div class="account-info">我的优惠</div>
        </div>
        <div class="account-item">
          <div class="number">
            <span class="balance">0</span>分
          </div>
          <div class="account-info">我的积分</div>
        </div>
      </section>
    </div>
    <div class="profile_bottom">
        <div class="list_item">
          <img src="~/assets/icons/svg/SVG_xiaoxi.svg" alt />
          <p>我的消息</p>
        </div>
        <div class="list_item">
          <img src="~/assets/icons/svg/svg-jifen.svg" alt />
          <p>积分商城</p>
        </div>
        <div class="list_item">
          <img src="~/assets/icons/svg/svgshoppingcart.svg" alt />
          <p>我的购物车</p>
        </div>
        <div class="list_item">
          <img src="~/assets/icons/svg/svginstall.svg" alt />
          <p>设置</p>
        </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
export default {
  name: "profile",
  components: {
    NavBar
  },
  methods:{
    pushClick(){
      this.$router.push('login')
    }
  }
};
</script>

<style scoped>
#profile {
  width: 100%;
  position: relative;
  background-color: #f2f2f2;
}
.profile_navbar {
  background-color: var(--color-tint);
  color: #fff;
}
.user {
  width: 100%;
  height: 90px;
  background-color: var(--color-tint);
  text-align: center;
  position: relative;
  margin-top: -1px;
}
/* .user_img{
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 20px;
  text-align: center;
  line-height: 63px;
} */
/* .left{
  float: left;
} */
.svgman {
  width: 60px;
  height: 60px;
  background-color: #fff;
  padding: 10px;
  border-radius: 20%;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(0, -50%);
}
.user_name {
  position: absolute;
  font-size: 16px;
  top: 50%;
  left: 25%;
  transform: translate(0, -50%);
  color: #fff;
}
.user_login {
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translate(0, -50%);
  color: #fff;
}

.account {
  display: flex;
}

.account-item {
  width: 100%;
  background-color: #fff;
  margin-right: 1px;
  text-align: center;
}

.account-item:last-of-type {
  margin-right: 0;
}

.account-item {
  color: #666;
  font-size: 13px;
  padding: 18px;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}

.account-info {
  margin-top: 6px;
}
.profile_bottom {
  width: 100%;
  margin-top: 10px;
  height: 300px;
  background-color: #fff;
}

.list_item{
  display: flex;
  margin: 5px 0;
  padding:10px;
  vertical-align: middle;
  height: 50px;
}
.list_item img{
  width: 30px;
  height: 30px;
  padding:5px;
  /* margin: 5px; */
}
.list_item p{
  flex:1;
  padding-left: 15px;
  border-bottom: 1px solid #eee;
  line-height: 30px;
  height: 30px;
}
</style>
