import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/dashboard/Home'


//layouts
import FullLayout from '@/components/layouts/FullLayout'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
   /*  {
      path: '/',
      name: 'Landing',
      component: SingleLayout,
      children: [
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld,
        }]
    }, */
    {
    path: '/',
    name: 'Dashboard',
    component: FullLayout,
   children: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        }
      ]
        
    }
  ]
})