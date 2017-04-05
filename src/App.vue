<template>
  <div id="app">
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
  import Bottom from './components/Bottom.vue'
export default {
  name: 'app',
  components:{
    Bottom
  }
}
</script>

<style scoped>
</style>
