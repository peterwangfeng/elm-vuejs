<template>
  <div class="root">
    <div class="top">
      <img src="../assets/dz.svg" alt="" style="position: relative;top: -10px;">
      <span style="color: #fff;font-size: 20px;display: inline-block;width: 200px;overflow: hidden;text-overflow: ellipsis">{{obj.name}}</span>
      <div class="right">
        <span style="color:#fff">{{weather.temperature}}℃</span><br>
        <span style="color:#fff">{{weather.description}}</span>
        <img :src="'https://fuss10.elemecdn.com/'+weather.image_hash+'.png'" alt="" style="width: 50px;height: 50px;position: relative;top: -20px;">
      </div>
    </div>
    <div class="middle">
      <input type="text" class="form-control" placeholder="搜索商家,商品">
    </div>
    <div class="bottom">
      <ul>
        <li v-for="h in hot">{{h.word}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'homeHeader',
    data() {
      return {
        obj: {},
        weather: {},
        hot:[]
      }
    },
    methods:{

    },
    created() {
      this.$http.get('/douyuapi/v2/pois/wtstbdt87jb')
        .then(function (res) {
//          console.log(res);
          this.obj = res.body;
        }.bind(this));

      this.$http.get('/douyuapi/bgs/weather/current?latitude=31.96205&longitude=118.85778')
        .then(function (res) {
//          console.log(res);
          this.weather = res.body;
        }.bind(this));
      this.$http.get('/douyuapi/shopping/v3/hot_search_words?latitude=31.96205&longitude=118.85778')
        .then(function (res) {
          console.log(res);
          this.hot = res.data;
        }.bind(this))
    }
  }
</script>
<style scoped>
  .root {
    background-color: #096fff;
    width: 100%;
    height: 180px;
    color: #000;
  }

  .top {
    padding-top: 10px;
    padding-right: 5px;
    height: 60px;
  }

  .right {
    float: right;
  }

  .middle {
    width: 80%;
    height: 50px;
    margin: 0 auto;
  }

  .middle input {
    border-radius: 30px;
    text-align: center;
    height: 50px;
    font-size: 20px;
  }

  .bottom ul {
    margin-top:50px;
    background-color: #096fff;
    color: #fff;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    list-style: none;
    color: #000;
  }
</style>
