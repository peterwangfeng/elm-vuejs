<template>
  <div class="root">
    <header>
      <span class="glyphicon glyphicon-chevron-left" @click="goBack"></span>
      <span style="font-size: 20px">发现</span>
    </header>
    <discover-middle v-for="dis in discover" :dis="dis" key="discover"></discover-middle>
    <div class="middle1 col-xs-12">
    </div>
    <div style="text-align: center;margin-top: 20px;margin-bottom: 10px;">
      <img src="../assets/clock.png" alt="">
    </div>
    <discover-bottom v-for="recommend in recommends" :recommend="recommend" key="discover-bottom"></discover-bottom>
    <div style="text-align: center;font-size: 20px;color: gray;margin-top: 10px;">查看更多</div>
  </div>
</template>
<script>
  import DiscoverMiddle from '../components/DiscoverMiddle'
  import DiscoverBottom from '../components/DiscoverBottom'
  export default {
    name: 'discover',
    data() {
      return {
        discover: [],
        recommends: []
      }
    },
    methods: {
      goBack() {
        window.history.back();
      }
    },
    components: {
      DiscoverMiddle,
      DiscoverBottom
    },
    created() {
      this.$http.get('/douyuapi/member/v1/discover?platform=2&block_index=0')
        .then(function (res) {
          this.discover = res.body[1];
          console.log(res);
        }.bind(this));

      this.$http.get('/douyuapi/member/gifts/suggest')
        .then(function (res) {
          this.recommends = res.body;
          console.log(res);
        }.bind(this))
    }
  }
</script>
<style scoped>
  .root {
    padding-bottom: 80px;
  }

  header {
    background-color: #097fff;
    width: 100%;
    padding-top: 10px;
    padding-left: 5px;
    height: 50px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }

  .middle1 {
    width: 100%;
    height: 100px;
    background: url("https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg") no-repeat;
    background-size: 100% 100%;
  }

  .glyphicon {
    font-size: 20px;
    /*margin-top: 10px;*/
    float: left;
  }

  span {
    font-size: 30px;
  }
</style>
