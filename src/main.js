// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入重置文件
import "./common/style/reset.css"

//引入vuex
import store from "./store"

//引入axios  放到vue的原型链上 组件中也有这个方法
import Axios from "./axios/index.js"
Vue.prototype.$axios = Axios

//mint ui
import MintUI from "mint-ui"
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

//图片懒加载
import LazyLoad from "vue-lazyload"
Vue.use(LazyLoad,{
  loading: require("./assets/logo.png"),
  attempt:1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
