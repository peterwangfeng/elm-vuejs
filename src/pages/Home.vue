<template>
  <div class="root">
    <div class="up" @click="upTop()">顶部</div>
    <home-header></home-header>
    <home-middle v-for="item in items" :middle="item" key="home-bottom"></home-middle>
    <h3 style="padding-left: 10px">推荐商家</h3>
    <home-bottom v-for="busin in busins" :busin="busin" key="home"></home-bottom>

  </div>
</template>
<script>
  import HomeHeader from '../components/HomeHeader'
  import HomeMiddle from '../components/HomeMiddle'
  import HomeBottom from '../components/HomeBottom'
  export default {
    name: 'home',
    components: {
      HomeHeader,
      HomeMiddle,
      HomeBottom
    },
    data() {
      return {
        items: [],
        busins: []
      }
    },
    methods: {
      upTop() {
        this.$('body').animate({scrollTop: 0}, 2000);
        this.$('.up').hide();
      },
      showScroll() {
        if (this.$(window).height() + this.$(document).scrollTop() > this.$(document).height() - 10) {
          this.$('.up').show();
          this.loadMore();
        } else {
          this.$('.up').hide();
        }
      },
      loadMore(){
        this.$('.up').show();
        this.$http.get('/douyuapi/shopping/restaurants', {
          params: {
            latitude: 31.96205,
            longitude: 118.85778,
            keyword: '',
            offset: this.busins.length * 2,
            limit: 20,
            'extras[]': 'activities',
            'restaurant_category_ids[]': 207
          }
        }).then(function (res) {
            this.busins = this.busins.concat(res.body);
        }.bind(this), function (err) {
          console.log(err);
        }.bind(this))
      },

      getMiddle() {
        this.$http.get('/douyuapi/v2/index_entry?geohash=wtstbdt87jb&group_type=1&flags[]=F')
          .then(function (res) {
            this.items = res.body;
          }.bind(this))
      },
      getBottom() {
        this.$http.get('/douyuapi/shopping/restaurants?latitude=31.96205&longitude=118.85778&keyword=&offset=20&limit=20&extras[]=activities&restaurant_category_ids[]=207')
          .then(function (res) {
            this.busins = res.body;
          }.bind(this))
      }
    },
    created() {
      this.getMiddle();
      this.getBottom();
      window.onscroll = this.showScroll;
    }
  }
</script>
<style scoped>
  .up {
    width: 50px;
    height: 50px;
    position: fixed;
    top: 600px;
    right: 20px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    background-color: red;
    z-index: 1000;
    display: none;
    cursor: pointer;
  }
</style>
