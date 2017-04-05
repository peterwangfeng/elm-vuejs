import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Discover from '../pages/Discover'
import Order from '../pages/Order'
import Me from '../pages/Me'
import Shop from '../pages/Shop'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
