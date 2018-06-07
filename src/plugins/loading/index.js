import LoadingInstance from './loading.js'

export default {
  install (Vue) {
    Vue.$loading = Vue.prototype.$loading = LoadingInstance
  }
}
