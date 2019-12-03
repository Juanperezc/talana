import Vue from 'vue'
import VueRouter from 'vue-router'

import LatestMovie from '@/components/LatestMovie'

//layouts
import FullLayout from '@/components/layouts/FullLayout'


Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LatestMovie',
      component: LatestMovie
    },
    {
    path: '/dashboard',
    name: 'Dashboard',
    component: FullLayout,
   children: [
        {
            path: '/',
            name: 'Home',
            component: LatestMovie,
        }] 
    }
  ]
})