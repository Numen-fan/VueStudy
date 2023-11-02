// 该文件用于创建vuex中最为核心的store

// 引入Vuex
import Vuex from "vuex";
import Vue from 'vue'
import personOptions from "@/store/person";
import countOptions from "@/store/count";
// 使用Vuex插件
Vue.use(Vuex)

// 创建并导出store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
});
