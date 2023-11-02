<template>
  <div class="container">
    <Category :title="美食" :listData="foods">
      <img slot="center" src="https://img2.baidu.com/it/u=1586710392,745891742&fm=253&fmt=auto&app=120&f=JPEG?w=1202&h=800" width="200p" height="200px" alt=""/>
      <a slot="footer" href="https://www.baidu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="footer" slot="footer">
        <a href="https://www.baidu.com">单机游戏</a>
        <a href="https://www.baidu.com">网络游戏</a>
      </div>
    </Category>
    <category title="电影">
      <video controls src = "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"/>
      <template v-slot:footer>
        <div class="footer">
          <a href="https://www.baidu.com">热门</a>
          <a href="https://www.baidu.com">最新</a>
          <a href="https://www.baidu.com">排行</a>
        </div>
      </template>
    </category>
<!--    <Category :title="游戏" :listData="games"/>-->
<!--    <Category :title='电影' :listData="films"/>-->
  </div>

</template>

<script>
import Category from "@/components/Category.vue";

export default {
  name: 'AppCategory',
  components: {
    Category
  },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾'],
      games: ['红色警戒', '穿越火线', '王者荣耀'],
      films: ['《教父》', '《无间道》', '《手机》']
    }
  }

}

</script>

<style scoped>
.container, .footer {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>