<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
<!--      需要缓存的组件名，注意是组件名，不是路由名-->
      <keep-alive :include="['News']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  beforeDestroy() {
    console.log("Home组件即将被销毁")
  },
  mounted() {
    // console.log(this)
  }
}

</script>

<style scoped>

</style>