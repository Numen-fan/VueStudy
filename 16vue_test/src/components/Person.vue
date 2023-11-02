<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: #bd362f">Count组件的和为{{ sum }}</h3>
    <input type="text" v-model="name" placeholder="请输入名字">
    <button @click="add">添加</button>
    <button @click="addWang">添加姓王的人</button>
    <button @click="addServerPerson">添加网络人</button>
    <ul>
      <li v-for="p in personList" :key='p.id'>{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>

import {mapState} from "vuex";
import {nanoid} from "nanoid";

export default {
  name: 'Person',
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState('personAbout', ['personList']),
    ...mapState('countAbout', ['sum']),
  },
  methods: {
    add() {
      const person = {id: nanoid(), name: this.name}
      this.$store.commit('personAbout/ADD_PERSON', person)
      this.name = ''
    },
    addWang() {
      const person = {id: nanoid(), name: this.name}
      this.$store.dispatch("personAbout/addPersonWang", person);
      this.name = ''
    },
    addServerPerson() {
      this.$store.dispatch("personAbout/addPersonServer")
    }
  }
}

</script>

<style scoped>

</style>