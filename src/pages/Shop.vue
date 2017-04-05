<template>
  <div class="root">
    <span class="glyphicon glyphicon-chevron-left"
          style="padding-left: 10px;padding-top: 5px;font-size: 20px;color: #fff;position: fixed;top: 0;background-color:pink;width: 100%;z-index: 1000"
          @click="goBack()"></span><home-detail :info="info"></home-detail>
    <div class="fix">
      <button class="btn btn-primary" @click="isShowFood()">商品</button>
      <button class="btn btn-primary" @click="isEvalute()">评价</button>
    </div>
    <food :food="food" v-if="isFoodShow1"></food>
    <evaluate v-if="isEvalute1"></evaluate>
  </div>
</template>
<script>
  import HomeDetail from '../components/HomeDetail'
  import Food from '../components/Food'
  import Evaluate from '../components/Evaluate'
  export default {
    name: 'shop',
    data() {
      return {
        food: [],
        info: {},
        isFoodShow1: true,
        isEvalute1: false
      }
    },
    components: {
      HomeDetail,
      Food,
      Evaluate
    },
    methods: {

      goBack() {
        window.history.back();
      },
      isEvalute() {
        this.isFoodShow1 = false;
        this.isEvalute1 = true;
      },
      isShowFood() {
        this.isFoodShow1 = true;
        this.isEvalute1 = false;
      },
      getBottom() {
        this.$http.get('/douyuapi/shopping/v2/menu?restaurant_id=' + this.$route.hash.split('=')[2])
          .then(function (res) {
//            console.log(res);
            this.food = res.body;
          }.bind(this));

        this.$http.get('/douyuapi/shopping/restaurant/' + this.$route.hash.split('=')[2] + '?extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics&latitude=31.96205&longitude=118.85778')
          .then(function (res) {
            console.log(res);
            this.info = res.body;
          }.bind(this));
      }
    },
    created() {
      this.getBottom();

    }
  }
</script>
<style scoped>
  .fix {
    width: 100%;
    position: fixed;
    top: 150px;
    text-align: center;
    background-color: #fff;
    z-index: 10000;
  }
</style>
