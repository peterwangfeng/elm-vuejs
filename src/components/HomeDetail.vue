<template>
  <div class="root">
    <div class="col-xs-4">
      <!--<img :src="'https://fuss10.elemecdn.com/'+info.image_path+'.jpeg'" alt="" width="80" height="80">-->
      <!--<img :src="'https://fuss10.elemecdn.com/'+info.image_path+'.png'" alt="" width="80" height="80">-->
      <img :src="info.image_path | formatImagePath" alt="">
    </div>
    <div class="col-xs-8">
      <dl>
        <dt>{{info.name}}</dt>
        <dd>
          <span>{{info.delivery_mode.text}}</span>/
          <span>{{info.order_lead_time}}</span>/
          <span>{{info.piecewise_agent_fee.tips}}</span>
        </dd>
        <!--<dd style="overflow: hidden;text-overflow: ellipsis">{{info.promotion_info}}</dd>-->
      </dl>
    </div>
    <div class="row">
      <div class="col-xs-10">
        <span style="background-color:green;color: #fff;">{{info.activities[0].icon_name}}</span>
        {{info.activities[0].description}}(App专享)
      </div>
      <div class="col-xs-2 text-center">
        2个活动
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'homeDetail',
    props: ['info']
  }
</script>
<style scoped>
  .root {
    background-color: pink;
    position: fixed;
    width: 100%;
    top: 30px;
    left: 0;
    z-index: 1000;
  }
</style>
