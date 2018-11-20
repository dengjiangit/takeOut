// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Button } from 'mint-ui'
import Vuelazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
Vue.config.productionTip = false
// 注册全局组件标签
Vue.component(Button.name, Button)
Vue.use(Vuelazyload, {
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
