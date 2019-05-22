// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)
import axios from 'axios'
Vue.prototype.axios = axios;
axios.defaults.baseURL='/';//配置本地服务器代理 config/index.js/14行

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

import $ from 'jquery'

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;//网页注入 title
  next()
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
