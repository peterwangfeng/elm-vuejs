<template>
  <div class="root">
    <div>
      <span style="background-color:#413d3c;color: #fff;">{{recommend.corner_marker}}</span>
    </div>
    <img :src="'https://fuss10.elemecdn.com/'+recommend.image_hash+'.jpeg'" alt="">
    <p>{{recommend.title}}</p><br>
    <span style="color: orange;">{{recommend.points_required | format}}</span>&nbsp;
    <del>{{recommend.original_price}}</del>
  </div>
</template>
<script>
  export default {
    name: 'discoverBottom',
    props: ['recommend']
  }
</script>
<style scoped>
  .root {
    display: inline-block;
    padding:10px;
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 100px;
  }
</style>
