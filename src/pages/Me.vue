<template>
  <div class="root">
    <div class="top">
      <span class="glyphicon glyphicon-chevron-left" @click="goBack()"></span>
      <span>我的</span>
    </div>
    <div class="avatar">
      <div class="col-xs-4">
        <div class="circle"></div>
      </div>
      <div class="col-xs-4" style="color: #fff;">
        <span>登录/注册 <br>
         <img src="../assets/手机.svg" alt="" width="40" height="40">登陆后享受更多特权
        </span>
      </div>
      <div class="col-xs-4" style="line-height: 100px;text-align: center;">
        <span class="glyphicon glyphicon-chevron-right pull-right" style="color: #fff;"></span>
      </div>
    </div>
    <div style="clear: both;"></div>
    <div class="middle">
      <div class="col-xs-4">
        <img src="../assets/余额.svg" alt="" style="background-color:orangered;">
        <p><span>余额</span></p>
      </div>
      <div class="col-xs-4">
        <img src="../assets/优惠.svg" alt="" style="background-color:orangered;">
        <p><span>优惠</span></p>
      </div>
      <div class="col-xs-4">
        <img src="../assets/积分.svg" alt="" style="background-color:green;">
        <p><span>积分</span></p>
      </div>
    </div>
    <div class="main">
      <ul class="list-group">
        <li class="list-group-item">
          <span class="glyphicon glyphicon-chevron-right pull-right"></span>
          <img src="../assets/我的订单.svg" alt="" style="background-color:dodgerblue;">
          我的订单
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-chevron-right pull-right"></span>
          <img src="../assets/积分商城.svg" alt="" style="background-color:orangered;">
          积分商城
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-chevron-right pull-right"></span>
          <img src="../assets/会员卡.svg" alt="" style="background-color:gold;">
          饿了么会员卡
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-chevron-right pull-right"></span>
          <img src="../assets/服务中心.svg" alt="" style="background-color:deepskyblue;">
          服务中心
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-chevron-right pull-right"></span>
          <img src="../assets/饿了么1.svg" alt="">
          下载饿了么App
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
      name:'me',
    methods:{
          goBack() {
              window.history.back();
          }
    }
  }
</script>
<style scoped>
  .root .top {
    height: 50px;
    background-color: #097fff;
  }

  .top span:nth-child(1) {
    float: left;
  }
  .avatar {
    background-color: #097fff;
    height: 100px;
  }
  .top {
    padding-top: 10px;
    text-align: center;
    padding-left: 15px;
    color: #fff;
  }
  .top .avatar {
    color: #fff;
  }
  span {
    font-size: 20px;
  }
  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #dcdcdc;
  }
  .middle {
    position: relative;
    line-height: 50px;
    height: 107px;
    text-align: center;
    border: 1px solid #ccc;
    border-left:none;
    border-right:none;
  }
  .middle div {
    display: inline-block;
    width: 33%;
    padding-left: 0;
    padding-right: 0;
    padding-top: 5px;
    border-left: 1px solid #ccc;
  }
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .main {
    border: 1px solid #ccc;
    border-left: none;
    margin-top: 10px;
    border-right: none;
  }
  .main img {
    width: 30px;
    height: 30px;
    color: #fff;
  }
  .main span{
    color: #ccc;
  }
</style>
