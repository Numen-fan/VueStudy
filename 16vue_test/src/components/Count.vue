<template>
  <div class="category">
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}学{{ subject }}</h3>
    <h3 style="color: #bd362f">Person组件的总人数为{{ personList.length }}</h3>
    <h3>列表中第一人的名字是{{firstPersonName}}</h3>
    <!--    注意这里要加上.number 否则会转为字符串-->
    <select v-model.number="step">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(step)">+</button>
    <button @click="increment(-step)">-</button>
    <button @click="incrementOdd(step)">当前和为奇数再加</button>
    <button @click="incrementWait(step)">等一等再加</button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex"

export default {
  name: 'Count',
  computed: {
    /** ...一个对象会将key-value展开到新的对象中*/
    // 利用matState生成计算属性
    // 方式一 这里key可以随便改
    // ...mapState({sum: 'sum', school: 'school', subject: 'subject'}),
    // 方式二 数组写法
    ...mapState('countAbout', ['sum', 'school', 'subject']),
    ...mapState('personAbout', ['personList']),

    // 借助mapGetters生成计算属性，从getters中读取
    ...mapGetters('countAbout', ['bigSum']),
    ...mapGetters('personAbout', ['firstPersonName']),

    // firstPersonName() {
    //   return this.$store.getters["personAbout/firstPersonName"]
    // }
  },
  data() {
    return {
      step: 1,
    }
  },
  mounted() {

  },
  methods: {
    ...mapMutations('countAbout', {increment: 'JIA'}),
    ...mapActions('countAbout', {incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'}),
  }
}

</script>

<style scoped lang="css">
button {
  margin: 5px;
}
</style>