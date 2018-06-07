import Toast from './toast.js'

export default {
  install (Vue) {
    Vue.$toast = Vue.prototype.$toast = Toast
  }
}
