<template>
  <div class="container">
    <div class="row">
      <Banner/>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--Vue中借助router-link标签实现路由的切换，最终会变为a标签，-->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--指定组件的呈现位置, 和插槽一个原理，需要指定位置-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Banner from "@/components/router/Banner.vue";

export default {
  name: 'AppRouter',
  components: {
    Banner,
    Home,
    About
  }
}

</script>

<style scoped>

</style>