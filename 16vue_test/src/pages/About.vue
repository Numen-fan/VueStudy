<template>
  <h2>我是About的内容</h2>
</template>
<script>
export default {
  name: 'About',
  beforeDestroy() {
    console.log("About组件即将被销毁")
  },
  mounted() {
    // console.log(this)
  },

  // 通过路由规则，进入该组件时被调用, 调用时机晚于router中的before
  beforeRouteEnter(to, from, next) {
    console.log("aabb")
    next()
  },

  // 通过路由规则，离开该路由组件被调用
  beforeRouteLeave(to, from, next) {
    next()
  }
}

</script>

<style scoped>

</style>