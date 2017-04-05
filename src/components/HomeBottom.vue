<template>
  <div class="root">
    <router-link :to="'/shop/#geohash=wtstbdt87jb&id='+busin.id">
      <div class="col-xs-3">
        <img :src="busin.image_path|formatImagePath" alt="" width="100" height="100">
        <!--<img :src="'https://fuss10.elemecdn.com/'+busin.image_path+'.png'" alt="" width="90" height="90">-->
      </div>
      <div class="col-xs-6">
        <p>
          <span>品牌</span>
          <span>{{busin.name}}</span>
        </p>
        <p>
          <span class="glyphicon glyphicon-star"></span>
          <span class="glyphicon glyphicon-star"></span>
          <span class="glyphicon glyphicon-star"></span>
          <span class="glyphicon glyphicon-star"></span>
          <span>{{busin.rating}}</span>
          <span>月售卖{{busin.recent_order_num}}单</span>
        </p>
          <p>
            <span>¥{{busin.float_minimum_order_amount}}元起送</span>
            <span>{{busin.piecewise_agent_fee.tips}}</span>
            <!--<span>{{busin.distance | formatPrice}}km</span>-->
            <!--<span>{{busin.order_lead_time}}分钟</span>-->
          </p>
        </div>
      <div class="col-xs-3">
        <p><span>保</span><span>准</span></p>
        <p><span>准时达</span><span>蜂鸟专送</span></p>
        <p>
          <span>{{busin.distance | formatPrice}}km</span>
          <span>{{busin.order_lead_time}}分钟</span>
        </p>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'homeBottom',
    props: ['busin']
  }
</script>
<style scoped>
  .root {
    color: #ccc;
  }
  div {
    padding: 20px;
  }
</style>
