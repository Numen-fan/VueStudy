<template>
  <div class="container">
    <GithubSearch/>
    <GithubAvatarList/>
  </div>
</template>

<script>
import GithubSearch from "@/components/GithubSearch.vue";
import GithubAvatarList from "@/components/GithubAvatarList.vue";
export default {
  name: 'AppGithub',
  data() {
    return {}
  },
  components: {
    GithubAvatarList,
    GithubSearch
  },
  methods: {}
}
</script>

<style>
</style>