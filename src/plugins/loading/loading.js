import Vue from 'vue'
import LoadingTemplate from './loading.vue'

const Loading = Vue.extend(LoadingTemplate)

let instance

export default {
  open (options = {}) {
    if (!instance) {
      instance = new Loading({
        el: document.createElement('div')
      })
    }
    if (instance.visible) return
    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
      instance.visible = true
    })
  },
  close () {
    if (instance) {
      instance.visible = false
    }
  }
}
