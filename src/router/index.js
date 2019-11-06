import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'

import One from '../views/pages/one.vue'
import Two from '../views/pages/two.vue'
import Three from '../views/pages/three.vue'
import Four from '../views/pages/four.vue'
import Five from '../views/pages/five.vue'

import List from '../views/pages/children/List.vue'
import Tui from '../views/pages/children/tui.vue'
import Hot from '../views/pages/children/hot.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/home/one',
    component: Home,
    children:[
      {
        path:'/home/one',
        name:'one',
        redirect:'/home/one/attention',
        component:One,
        children:[
          {
            path:'/home/one/:type',
            // name:'attention',
            component:List
          }
        ]
      },{
        path:'/home/two',
        name:'two',
        component:Two
      },{
        path:'/home/three',
        name:'three',
        component:Three
      },{
        path:'/home/four',
        name:'four',
        component:Four
      },{
        path:'/home/five',
        name:'five',
        component:Five
      }
    ]
  },
  {
    path:'/Detail',
    name:'detail',
    component:Detail
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
