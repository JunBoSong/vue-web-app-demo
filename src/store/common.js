// 恢复Vuex 相应模块里面的数据 fix: 刷新页面，vuex数据会丢失
const data = (sessionStorage.getItem('common') && JSON.parse(sessionStorage.getItem('common'))) || {}

const SAVE_CART = 'SAVE_CART' // 保存购物车数据

const state = {
  Cart: data.Cart || {} // 购物车数据
}

const mutations = {
  [SAVE_CART] (state, payload) {
    state.Cart = payload
  }
}

const actions = {
  [SAVE_CART] ({ commit }, payload) {
    commit('SAVE_CART', payload)
  }
}

const getters = {
  Cart: state => state.Cart
}

// 导出模块数据
export default {
  state,
  mutations,
  actions,
  getters
}
