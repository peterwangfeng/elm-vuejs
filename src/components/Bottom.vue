<template>
  <div class="root">
    <div class="bottom">
      <div class="menu">
        <ul>
          <router-link to="/">
            <li>
              <img src="../assets/elm.svg" alt="waimai"><br>
              <span>外卖</span>
            </li>
          </router-link>
          <router-link to="/discover">
            <li>
              <img src="../assets/fx.svg" alt="faxian"><br>
              <span>发现</span>
            </li>
          </router-link>
          <router-link to="/order">
            <li>
              <img src="../assets/dd.svg" alt="dingdan"><br>
              <span>订单</span>
            </li>
          </router-link>
          <router-link to="/me">
            <li>
              <img src="../assets/wd.svg" alt="wode"><br>
              <span>我的</span>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bottom'
  }
</script>
<style scoped>
  .root {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 100;
    background-color: #fff;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }


</style>
