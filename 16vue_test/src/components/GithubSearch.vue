<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" v-model="keyword" placeholder="enter the name you search"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: 'GithubSearch',
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("getUsers", {isFirstShow:false, isLoading:true, errMsg:'', users:[]});
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
          response => {
            this.$bus.$emit("getUsers", {isLoading:false, errMsg:'', users:response.data.items});
          },
          error => {
            this.$bus.$emit("getUsers", {isLoading:false, errMsg:'出错了', users:[]});
          }
      )
    }
  }
}

</script>

<style scoped>

</style>