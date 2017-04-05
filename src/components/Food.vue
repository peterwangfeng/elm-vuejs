<template>
  <div class="root">
    <div class="row">
      <div class="col-xs-4" style="height: 100%">
        <ul style="overflow-y: scroll;height: 1000px">
          <li v-for="f in food" style="color: red">{{f.name}}</li>
          <li v-for="f in food">{{f.name}}</li>
        </ul>
      </div>
      <span style="position: relative;top: 100px;left: -20px"><span style="color: gray;font-size: 2.5rem">&nbsp;&nbsp;热销榜</span>{{food[0].description}}</span>
      <div class="col-xs-8 right" v-for="f in food[0].foods" style="overflow-y: scroll;height: 400px;float: left;">
        <div class="col-xs-4">
          <!--<img :src="'https://fuss10.elemecdn.com/'+f.image_path+'.jpeg'" alt="" width="60" height="60">-->
          <img :src="f.image_path|formatImagePath" alt="" width="60" height="60">
        </div>
        <div class="col-xs-8 text-left">
          <div>{{f.name}}</div>
          <div>
            <span>{{f.tips.split(' ')[1]}}</span>
            <span>{{f.satisfy_rate}}%</span>
          </div>
          <div>
            <span style="color: orange;">¥{{f.specfoods[0].price}}起</span>
            <img class="pull-right" src="../assets/加号.svg" alt="" width="40" height="40">
          </div>
        </div>
      </div>
    </div>
    <detail-bottom></detail-bottom>
  </div>
</template>
<script>
  import DetailBottom from './DetailBottom'
  export default {
    name: 'food',
    props: ['food'],
    data() {
      return {}
    },
    components: {
      DetailBottom
    }
  }
</script>
<style scoped>
  .root {
    width: 100%;
    text-align: center;
  }

  .row {
    margin-top: 100px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul li {
    margin-top: 50px;
  }

  .right {
    margin-top: 100px;
  }
  div {
    padding-top: 10px;
  }
</style>
