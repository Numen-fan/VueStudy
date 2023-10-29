<template>
  <div>
    <button @click="show = !show">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="show">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data() {
    return {
      show: true
    }
  }
}

</script>

<style scoped>
h1 {
  background-color: orange;
}

.hello-enter-active {
}

.hello-leave-active {
}


</style>
