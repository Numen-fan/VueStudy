/**
 * 该文件是整个项目的入口文件
 */

// 引入Vue
import Vue from 'vue/dist/vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入插件
import plugins from "@/plugins";

// 关闭vue的生产提示
Vue.config.productionTip = false

Vue.use(plugins)
// 创建vue的实例对象 ----vm
new Vue({
  // el: '#app', // 和后面的mount('#app')效果一致
  // 完成了将App组件放入容器中的功能
  render: h => h(App),
  // template:'<h1>你好</h1>',
  // components:{App}
  beforeCreate() {
    Vue.prototype.$bus = this; // 安装全局事件总线
  }
}).$mount('#app')
