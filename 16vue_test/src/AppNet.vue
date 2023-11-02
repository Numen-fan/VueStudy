<template>
  <div>
    <button @click="getStudent">获取学生信息</button>
    <br>
    <button @click="getCars">获取汽车信息</button>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: 'AppNet',
  methods: {
    getStudent() {
      axios.get('http://localhost:8080/student').then(
          response => {
            console.log(response.data)
          },
          error => {
            console.log(error)
          }
      )
    },
    getCars() {
      axios.get('http://localhost:8080/cars').then(
          response => {
            console.log(response.data)
          },
          error => {
            console.log(error)
          }
      )
    }
  }
}
</script>

<style scoped>

</style>