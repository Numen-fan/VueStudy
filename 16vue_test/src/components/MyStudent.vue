// 组件的结构
<template>
  <div class="demo">
    <h1 v-text="msg"/>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <h2>学生性别：{{ sex }}</h2>
     <button @click='sendStudentName'>把学生名给APP</button>
  </div>
</template>

// 组件的交互
<script>
// 引入
import {mixin} from "@/mixin"
import pubsub from 'pubsub-js'
// 需要暴露，外面才能导入
export default {
  name: 'MyStudent', // 最好和文件名保持一致
  data() { // 这里面的data必须是函数式，不能是对象式
    return {
      msg:"我是一个学生",
      myAge:this.age,
    }
  },
  // 定义方式1,props是不能修改的, 如果需要修改，复制一份到data中进行修改
  // props:['name','sex','age'],
  // 定义方式三
  // props: {
  //   name:String,
  //   age:Number,
  //   sex:String
  // },
  // 定义方式三
  props: {
    name:{
      type:String,
      require:true, // 必须要传的
    },
    age: {
      type: Number,
      default: 99 // 默认值
    },
    sex:{
      type:String,
      default: '男'
    }
  },
  mixins:[mixin],
  methods: {
    sendStudentName() {
      // this.$bus.$emit('atguigu', this.name);
      pubsub.publish('hello', '你好')
    }
  },
}
</script>

<style scoped>
/* 组件的样式 */
.demo {
  background-color: red;
}
</style>