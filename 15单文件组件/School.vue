// 组件的结构
<template>
    <div>
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click='showName'>点我提示学校名</button>
    </div>
</template>

// 组件的交互
<script>
    // 需要暴露，外面才能导入
    export default {
        name: 'School', // 最好和文件名保持一致
               data() { // 这里面的data必须是函数式，不能是对象式
                return {
                    name: '尚硅谷',
                    address:'北京昌平'
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
        background-color: orange;
    }
</style>