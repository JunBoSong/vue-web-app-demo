// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
// 默认设置750px设计稿下1rem = 100px
import '@/util/rem'
// 重置全局样式
import '@/assets/style/reset.css'
import Loading from '@/plugins/loading'
import Toast from '@/plugins/toast'

import { AlertPlugin, ToastPlugin, ConfirmPlugin } from 'vux'

// 全局变量配置
import GlobalConfig from '@/config/GlobalConfig'

Vue.use(GlobalConfig)

Vue.use(Loading)
Vue.use(Toast)

Vue.use(AlertPlugin)
Vue.use(ToastPlugin, {position: 'bottom'})
Vue.use(ConfirmPlugin)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
