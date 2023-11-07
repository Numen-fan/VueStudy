/**
 * 该文件是整个项目的入口文件
 */

// 引入Vue
import Vue from "vue";
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
import AppNet from "@/AppNet.vue";
import AppGithub from "@/AppGithub.vue";
import AppCategory from "@/AppCategory.vue";
import AppCount from "@/AppCount.vue";
import AppRouter from "@/AppRouter.vue";
import Vuex from 'vuex'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入，css按需自己导入
import {Button, Row, DatePicker} from "element-ui";

// 引入插件
import plugins from "@/plugins";
// 引入store
import store from "@/store"
// 引入Vue-router
import VueRouter from "vue-router";
// 引入路由器
import router from '@/router'
import AppElementUI from "@/AppElementUI.vue";
// 应用Vue-router插件
Vue.use(VueRouter)

// 关闭vue的生产提示
Vue.config.productionTip = false
Vue.use(plugins)
// Vue.use(ElementUI);

Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(DatePicker.name, DatePicker)

// 创建vue的实例对象 ----vm
new Vue({
    // el: '#app', // 和后面的mount('#app')效果一致
    // 完成了将App组件放入容器中的功能
    render: h => h(AppElementUI),
    // template:'<h1>你好</h1>',
    // components:{App}
    store,
    router,
    beforeCreate() {
        Vue.prototype.$bus = this; // 安装全局事件总线
    }
}).$mount('#app')
