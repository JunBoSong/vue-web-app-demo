/**
 * 时间格式化函数
 * @param {string | number} time
 * @param {string} fmt
 */
export const FormatTime = (time, fmt = 'YYYY/MM/DD hh:mm:ss') => {
  if (!time) return ''
  let date = new Date(time - 0)
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, date.getFullYear() + '').substr(4 - RegExp.$1.length)
  }
  let o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let key in o) {
    if (new RegExp(`(${key})`).test(fmt)) {
      let str = o[key] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
    }
  }
  return fmt
}

/**
 * 读取cookie值
 * @param {String} name
 */
export const readCookie = name => {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return ''
}

export const Session = (item) => {
  this.get = function () {
    return sessionStorage.getItem(item) ? JSON.parse(sessionStorage.getItem(item)) : ''
  }
  this.set = function (obj) {
    sessionStorage.setItem(item, JSON.stringify(obj))
  }
  this.remove = function () {
    sessionStorage.removeItem(item)
  }
}
