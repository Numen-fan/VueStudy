<template>
  <ul>
    <li>news001<input type="text"/></li>
    <li>news002<input type="text"/></li>
    <li>news003<input type="text"/></li>
  </ul >
</template>

<script>

export default {
  name: 'News',
  // 新的生命周期，仅仅在keep-alive标签包裹的情况下有用
  activated() {
    console.log("激活")
  },
  deactivated() {
    console.log("失活")
  }
}

</script>

<style scoped>

</style>