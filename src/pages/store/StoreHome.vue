<template>
  <div class="app">
    storeHome
    fsdaf
  </div>
</template>
<script>
export default {
  name: 'StoreHome',

  methods: {
    async loadData () {
     const res = await this.$post('demo/test', {
        test: '123'
      })
      console.log('res', res)
    }
  },

  created () {
    this.loadData()
    this.$vux.toast.text('hello', 'bottom')
    this.$toast('test')
  }
}
</script>
<style lang="less" scoped>

</style>
