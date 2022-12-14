import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';

Vue.use(Vuesax, {
  colors: {
    primary:'#FA867B',
    success:'rgb(23, 201, 100)',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'rgb(36, 33, 69)'
  }
})
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/api';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
