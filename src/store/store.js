import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store =new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    changeDrawer(state) {
    
      state.drawer = !state.drawer
      console.log('changeDrawer',state.drawer)
    },
    boolDrawer(state,value) {
    
      state.drawer = value
    }
  },
  actions: {
   /*  changeDrawer () {
      $context.commit('changeDrawer')
    } */
}
})