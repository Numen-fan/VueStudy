<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="edit">编辑</button>
    <button class="btn btn-danger" @click="deleteTD(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props:['todo'],
  methods: {
    handleCheck(id) {
      // 通知App组价将对应的todo的done取反
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },
    deleteTD(id) {
      if (confirm('确定删除吗？')) {
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo', id)
      }
    }
  }
}

</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>