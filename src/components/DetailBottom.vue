<template>
  <div class="root">
    <div class="circle">
      <img src="../assets/满购物车.svg" alt="" width="60" height="60">
    </div>
    <span>¥0</span>
    <button>去结算</button>
  </div>
</template>
<script>


  export default {
    name: 'detailBottom'
  }
</script>
<style scoped>
    .root {
      background-color: #3c3f41;
      position: fixed;
      bottom: 0;
      z-index: 1000;
    }
    .circle {
      display: inline-block;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      float: left;
      background-color: #474749;
      overflow: hidden;
      text-align: center;
      line-height: 80px;
      position: relative;
      top:-30px;
    }
  button {
    float: right;
  }
  span {
    float: left;
    color: #fff;
    font-size: 3rem;
    margin-left: 10px;
  }
  button {
    width: 150px;
    height: 77px;
    border: none;
    background-color: #5c5c5e;
    color: #fff;
    font-size: 2.5rem;
  }
</style>
