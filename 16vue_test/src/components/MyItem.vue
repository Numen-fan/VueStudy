<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input v-show="todo.isEdit" type="text"
             :value="todo.title"
             @blur="handleBlur(todo, $event)"
             ref="inputTitle"
      >
    </label>
    <button class="btn btn-danger" @click="deleteTD(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import Vue from "vue";

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
    },
    handleEdit(todo) {
      // 如果身上有isEdit属性，就直接改
      if (!todo.hasOwnProperty('isEdit')) {
        Vue.set(todo, 'isEdit', true);
      } else {
        todo.isEdit = true;
      }
      // 下一轮
      this.$nextTick(()=> {
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) {
        alert("输入内容不能为空")
        return
      }
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
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
