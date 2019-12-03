import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import { store } from './store/store'
import Vuex from 'vuex';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from './services/AxiosConfig';

import VeeValidate from "vee-validate";
Vue.use(VeeValidate);
Vue.use(Vuex)
Vue.use(VueSweetalert2);
Vue.config.productionTip = false

const app = new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios(app);
