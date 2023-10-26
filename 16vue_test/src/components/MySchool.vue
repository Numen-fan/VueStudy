// 组件的结构
<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click='showName'>点我提示学校名</button>
  </div>
</template>

// 组件的交互
<script>
import {mixin} from "@/mixin"
import pubsub from 'pubsub-js'
// 需要暴露，外面才能导入
export default {
  name: 'MySchool', // 最好和文件名保持一致
  data() { // 这里面的data必须是函数式，不能是对象式
    return {
      name: '尚硅谷',
      address: '北京昌平',
      pubId:''
    }
  },
  mixins: [mixin],
  methods: {
    // showName() {
    //     alert(this.name)
    // }
  },
  mounted() {
    const pubId = pubsub.subscribe('hello', (msgName, data) => {
      console.log('有人发布了hello消息，hello消息的回调执行了', data)
    })
    this.pubId = pubId;
    console.log(pubId);
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style lang="css" scoped>
/* 组件的样式 */
.demo {
  background-color: orchid;
}
</style>