<template>
  <ul class="todo-main">
    <!--    ：todo是传值-->
    <MyItem v-for="item in todos"
            :key="item.id"
            :todo="item"
            />
  </ul>
</template>

<script>

import MyItem from "@/components/MyItem.vue";

export default {
  name: 'MyList',
  components: {MyItem},
  props: ['todos',]
}

</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>