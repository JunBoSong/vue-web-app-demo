import Vue from 'vue'
import Vuex from 'vuex'

// 把vuex数据缓存到sessionStorage
import plugins from './plugins'
// common模块
import common from './common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common
  },
  // strict: process.env.NODE_ENV !== 'production',
  plugins
})
