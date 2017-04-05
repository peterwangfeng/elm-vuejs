<template>
  <div class="root">
    <div class="row">
      <div class="col-xs-4 text-center" style="border-right: 1px solid #ccc">
        <span style="color: orangered;font-size: 3rem">{{score.overall_score | formatOverAll}}</span><br>
        <span>综合评价</span><br>
        <span style="color: #ccc;">{{score.compare_rating | formatRate}}</span>
      </div>
      <div class="col-xs-8">
        <p>
          <span>服务态度</span>
          <span class="glyphicon glyphicon-star"></span>
          <span class="glyphicon glyphicon-star"></span>
          <span class="glyphicon glyphicon-star"></span>
          <span class="glyphicon glyphicon-star"></span>
          <span class="glyphicon glyphicon-star"></span>
          <span>{{score.service_score.toFixed(1)}}</span>
        </p>
        <p>
          <span>菜品评价</span>
          <span class="glyphicon glyphicon-star"></span>
          <span class="glyphicon glyphicon-star"></span>
          <span class="glyphicon glyphicon-star"></span>
          <span class="glyphicon glyphicon-star"></span>
          <span class="glyphicon glyphicon-star"></span>
          <span>{{score.food_score.toFixed(1)}}</span>
        </p>
        <p>
          <span>送达时间</span>
          <span>{{score.deliver_time}}分钟</span>
        </p>
      </div>
    </div>
    <div class="button">
      <button v-for="tag in tags" class="btn btn-default btn-lg">{{tag.name}}({{tag.count}})</button>
    </div>
    <div class="evaluate1" v-for="e in evaluates">
      <div class="col-xs-3">
        <img :src="e.avatar | formatImagePath" alt="" style="width: 50px;height: 50px;">
        <!--<img :src="'https://fuss10.elemecdn.com/'+e.avatar+'.png'" alt="" style="width: 50px;height: 50px;">-->
        <!--<img src="https://fuss10.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg" alt="" width="50" height="50">-->
      </div>
      <div class="col-xs-5">
        <span>{{e.username}}</span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
      </div>
      <div class="col-xs-4 text-right">
        {{e.rated_at}}
      </div>
      <hr>
    </div>
    <div class="fix"></div>
  </div>
</template>
<script>
  export default {
    name: 'evaluate',
    data() {
      return {
        tags: [],
        score: {},
        evaluates: [],
        loadingMore:false
      }
    },
    methods: {
      showScroll() {
        if (this.$(window).height() + this.$(document).scrollTop() > this.$(document).height() - 10) {
          if(!this.loadingMore) {
            this.loadMore();
          }
        }
      },
      loadMore() {
          this.loadingMore = false;
        this.$http.get('/douyuapi/ugc/v2/restaurants/' + this.$route.hash.split('=')[2] + '/ratings', {
          params: {
            has_content: true,
            offset: this.evaluates.length,
            limit: 10
          }
        })
          .then(function (res) {
            console.log(res + 111);
            this.evaluates = this.evaluates.concat(res.body);
            this.loadingMore = false;
          }.bind(this));
      },
    },
    created() {
      window.onscroll = this.showScroll;
      this.$http.get('/douyuapi/ugc/v2/restaurants/' + this.$route.hash.split('=')[2] + '/ratings/tags')
        .then(function (res) {
          console.log(res);
          this.tags = res.body;
        }.bind(this));
//      https://mainsite-restapi.ele.me/ugc/v2/restaurants/391486/ratings/scores
      this.$http.get('/douyuapi/ugc/v2/restaurants/' + this.$route.hash.split('=')[2] + '/ratings/scores')
        .then(function (res) {
          console.log(res);
          this.score = res.body;
        }.bind(this));
      //https://mainsite-restapi.ele.me/ugc/v2/restaurants/391486/ratings?has_content=true&offset=0&limit=10
      this.$http.get('/douyuapi/ugc/v2/restaurants/' + this.$route.hash.split('=')[2] + '/ratings?has_content=true&offset=0&limit=10')
        .then(function (res) {
          console.log(res + 111);
          this.evaluates = res.body;
        }.bind(this));
    }
  }
</script>
<style scoped>
  .root {
    margin-top: 160px;
  }

  button {
    margin-left: 10px;
  }

  button:nth-child(1) {
    background-color: #3190e8;
  }

  div {
    padding: 10px;
  }

  .button {
    margin-top: 30px;
  }

  .glyphicon {
    color: darkgoldenrod;
  }

  .fix {
    width: 100%;
    height: 77px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10000;
  }

  img {
    border-radius: 50%;
  }
</style>
