const sessionStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    Object.keys(state).forEach((item, index) => {
      window.sessionStorage.setItem(item, JSON.stringify(state[item]))
    })
  })
}

export default [sessionStoragePlugin]
