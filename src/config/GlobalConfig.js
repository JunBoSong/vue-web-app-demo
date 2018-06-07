import {
  httpGet,
  httpPost,
  $httpImgUpoad
} from '@/service'

function install (Vue, options) {
  // 全局正则
  Vue.prototype.$reg = {
    phone: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/,
    idCard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  }

  // 数据请求
  Vue.prototype.$get = httpGet // get请求
  Vue.prototype.$post = httpPost // post请求
  Vue.prototype.$httpImgUpoad = $httpImgUpoad // post请求

  // sessionStorage封装
  Vue.prototype.$session = {
    get (key) {
      return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : ''
    },
    set (key, val) {
      sessionStorage.setItem(key, JSON.stringify(val))
    },
    remove (key) {
      sessionStorage.removeItem(key)
    }
  }

  /**************
   * 全局directive
   **************/

  // 解决键盘挡住输入框指令
  Vue.directive('keyBoard', {
    inserted: function (el) {
      const oHeight = document.body.clientHeight
      window.addEventListener('resize', function (params) {
        if (oHeight > document.body.clientHeight) { // 键盘弹出
          el.scrollIntoView(false)
        }
      }, false)
    }
  })

  // 进入页面input自动聚焦
  Vue.directive('focus', {
    inserted (el, { value }) {
      if (value) el.focus()
    }
  })

  /**************
   * 全局filter
   **************/

  // 价格过滤器 格式 ￥20.00
  Vue.filter('currency', (value) => {
    if (!value) return '￥0.00'
    return `￥${(value / 100).toFixed(2)}`
  })

  // 价格过滤器 格式 20.00元
  Vue.filter('price', (value) => {
    if (!value) return '0.00元'
    return `${(value / 100).toFixed(2)}元`
  })

  // 时间过滤器
  Vue.filter('filterTime', (value, formatDefault = 'YYYY/MM/DD hh:mm:ss') => {
    if (!value) return ''
    let date = new Date(value - 0)
    let format = formatDefault
    if (/(Y+)/.test(format)) {
      format = format.replace(RegExp.$1, date.getFullYear() + '').substr(4 - RegExp.$1.length)
    }
    let o = {
      'M+': date.getMonth() + 1,
      'D+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let key in o) {
      if (new RegExp(`(${key})`).test(format)) {
        let str = o[key] + ''
        format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
      }
    }
    return format
  })
}

export default install
