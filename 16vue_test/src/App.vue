<template>
  <!-- 必须要有个div根元素 -->
  <div class="todo-container">
    <!-- <img src="./assets/logo.png" alt="vue log"/> -->
    <!-- <button @click="showDOM">点我输出上方的DOM元素</button> -->
    <!-- <School ref="sch"/> -->
    <!--    绑定一个自定义事件，实现子给父传递数据-->
<!--    <MyStudent name="李四" :age="19"/>-->
<!--    <MySchool/>-->
<!--    <hr/>-->
    <div class="todo-wrap">
      <MyHeader @addTodo="addTodo"/>
      <MyList :todos="todos"/>
      <MyFooter :todos="todos" @checkAllTodo="checkAll" @clearAllTodo="clearAll"/>
    </div>
  </div>
<!--    <Test/>-->
</template>

<script>
// 引入组件
import MyStudent from "@/components/MyStudent.vue";
import MySchool from "@/components/MySchool.vue";
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
import MyList from "@/components/MyList.vue";
import Test from "@/components/Test.vue";
import Test2 from "@/components/Test2.vue";

export default {
  name: 'App',
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todo")) || []
    }
  },
  components: {
    MyHeader,
    MyList,
    MyFooter,
    MyStudent,
    MySchool,
    Test,
    Test2
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todo', JSON.stringify(value));
      }
    }
  },
  mounted() {
    this.$bus.$on("atguigu", (name) => {
      console.log(name)
    })
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('deleteTodo', this.deleteTodo)
    this.$bus.$on('updateTodo', this.updateTodo)
  },
  beforeDestroy() {
    this.$bus.$off('atguigu'); // 必须要加上事件名，不能传空，因为这是傀儡bus上的解绑，这里有个问题，如果两个组件都监听呢？？？？
    this.$bus.$off('checkTodo')
    this.$bus.$off('deleteTodo')
    this.$bus.$off("updateTodo")
  },
  methods: {
    // 添加
    addTodo(x) {
      this.todos.unshift(x)
    },
    // 勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    // 删除todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      })
    },
    // 更新todo
    updateTodo(id, value) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = value
      })
    },
    //
    checkAll(done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },

    clearAll() {
      this.todos.forEach((todo) => {
        todo.done = false;
      })
    },

    demo: function (name) {
      alert(name)
    }
  }
}
</script>

<style>
// base
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: white;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: white;
  background-color: skyblue;
  border: 1px solid #6fabc2;
  margin-right: 5px;
}

.btn-danger:hover {
  color: white;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>
