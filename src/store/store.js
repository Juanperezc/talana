import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store =new Vuex.Store({
  state: {
    drawer: false,
    search: null,
    items_to_pay: [],
    category_select: null
  },
  mutations: {
    changeDrawer(state) {
      state.drawer = !state.drawer
      console.log('changeDrawer',state.drawer)
    },
    boolDrawer(state,value) {
      state.drawer = value
    },
    changeCategory(state,value){
      state.category_select = value
    },
    changeSearch(state,value){
      state.search = value
    },
    pushItemToPay(state,value){
      state.items_to_pay.push(value)
    }
  },
  actions: {
  }
})