// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import request from '@/components/axios_request'
//import 'element-ui/lib/theme-chalk/index.css';
//import ElementUI from 'element-ui';
import { Input,Select,OptionGroup,Option } from 'element-ui';
axios.defaults.baseURL = 'homepage/'
  
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.request = request
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
//Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
