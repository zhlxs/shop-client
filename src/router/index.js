import Vue from 'vue'
import Router from 'vue-router'
//import VueRouter from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

Vue.use(Router)

//所有路由
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/home',
      //name: 'HelloWorld',
      component: Home
    },
    {
      path: '/order',
      //name: 'HelloWorld',
      component: Order
    },
    {
      path: '/profile',
      //name: 'HelloWorld',
      component: Profile
    },
    {
      path: '/search',
      //name: 'HelloWorld',
      component: Search
    },
    {
      path: '/',
      //name: 'HelloWorld',
      //component: HelloWorld
      redirect: '/home'
    }
  ]
})
