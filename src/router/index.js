import Vue from 'vue'
import Router from 'vue-router'
//import VueRouter from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

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
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      //name: 'HelloWorld',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      //name: 'HelloWorld',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      //name: 'HelloWorld',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      //name: 'HelloWorld',
      //component: HelloWorld
      redirect: '/home'
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
