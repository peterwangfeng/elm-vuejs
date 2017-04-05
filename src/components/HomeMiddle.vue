<template>
  <div class="root">
    <figure>
      <img :src="'https://fuss10.elemecdn.com'+middle.image_url" alt="">
      <figcaption>
        {{middle.title}}
      </figcaption>
    </figure>
  </div>
</template>

<script>
  export default {
    name: 'homeMiddle',
    props:['middle']
  }
</script>

<style scoped>
  .root {
    margin-top: 50px;
    display: inline-block;
    width: 25%;
  }
  .root figure {
    text-align: center;
  }
  figure figcaption {
    text-align: center;
  }
  img {
    width: 100%;
    max-width: 65px;
    max-height: 65px;
  }
</style>
