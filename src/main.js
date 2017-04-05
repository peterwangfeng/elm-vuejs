// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import FontAwesome from './assets/Font-Awesome/css/font-awesome.css'
import Bootstrap from './assets/bootstrap/dist/css/bootstrap.css'
import Jquery from 'jquery'
import MinReset from 'minireset.css/minireset.css'
Vue.prototype.$ = Jquery;
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */

Vue.filter('formatPrice', function (value) {
  return (value / 1000).toFixed(2);
});

Vue.filter('formatImagePath', function (imghash) {
  if (!imghash) {
    return "";
  }
  let s1 = imghash.slice(0, 1); // 截取第1个字符 比如： 9
  let s2 = imghash.slice(1, 3); // 截取第2-3个字符 比如： b9
  let s3 = imghash.slice(3);    // 截取从第3个字符后的所有字符 比如：c8e482821be2080edcffbb3a8d376png
  let s4 = imghash.slice(32);   // 截取从第32个字符后的所有字符，取图片后缀名, 比如： png
  return "http://fuss10.elemecdn.com/" + s1 + "/" + s2 + "/" + s3 + "." + s4;
});

Vue.filter('format', function (value) {
  return value + '积分';
});
Vue.filter('formatRate', function (value) {
  return '高于周边商家' + (value * 100).toFixed(1) + '%';
});

Vue.filter('formatOverAll', function (value) {
  return value.toFixed(1);
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
