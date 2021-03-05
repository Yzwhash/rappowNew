import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import AtComponents from 'at-ui'
import 'at-ui-style'    // 引入组件样式

import VueResource from 'vue-resource'
import axios from "axios";

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(AtComponents)
Vue.use(VueResource)
Vue.prototype.$echarts=require('echarts')
Vue.prototype.$axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
