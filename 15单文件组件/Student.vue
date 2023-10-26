// 组件的结构
<template>
    <div>
        <h2>学生姓名{{name}}</h2>
        <h2>学生年龄{{age}}</h2>
        <!-- <button @click='showName'>点我提示学校名</button> -->
    </div>
</template>

// 组件的交互
<script>
    // 需要暴露，外面才能导入
    export default {
        name: 'Student', // 最好和文件名保持一致
        data() { // 这里面的data必须是函数式，不能是对象式
            return {
                name: '张三',
                age:18
            }
        },
        methods: {
            showName() {
                alert(this.name)
            }
        },
    }
</script>

<style>
/* 组件的样式 */
    .demo {
        background-color: red;
    }
</style>