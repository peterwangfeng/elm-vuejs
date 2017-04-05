<template>
  <div class="root">
    <div class="header">
      <span class="glyphicon glyphicon-chevron-left" @click="goBack"></span>
      <span class="order">订单</span>
    </div>
    <div class="main">
      <img src="http://github.elemecdn.com/eleme/fe-static/master/media/empty/error-load.png" alt="">
      <h2 style="color: #6a6a6a;">登录后查看外卖订单</h2>
      <button class="btn btn-success btn-lg">立即登录</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'order',
    methods: {
        goBack() {
            window.history.back();
        }
    }
  }
</script>
<style scoped>
  .header {
    background-color: #097fff;
    padding-top: 10px;
    padding-left: 5px;
    text-align: center;
    color: #fff;
    font-size: 30px;
  }

  span {
    display: inline-block;
  }

  .header span:first-child {
    float: left;
  }

  .main {
    padding-top: 100px;
    text-align: center;
  }
  .order {
    position: relative;
    top: -5px;
  }
</style>
