<template>
  <div class="root">
    <div class="col-xs-8" style="position: relative;top: 23px;">
      <span style="font-size: 20px">{{dis.title}}</span>
      <p style="color: #ccc;">{{dis.subtitle}}</p>
    </div>
    <div class="col-xs-4" style="line-height: 100px">
      <img :src="'https://fuss10.elemecdn.com/'+dis.main_pic_hash+'.jpeg'" alt="">
    </div>
  </div>


</template>
<script>
  export default {
    name: 'discoverMiddle',
    props: ['dis']
  }
</script>
<style scoped>
  .root {
    display: inline-block;
    width: 50%;
    overflow: hidden;
    border: 1px solid #ccc;
    border-right: none;
    border-left: none;
    height: 100px;
  }
  p{
    width: 100%;
  }
  img {
    width: 100%;
    max-width: 70px;
  }
  span{
    color: orangered;
  }

</style>
