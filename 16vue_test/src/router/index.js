// 该文件专用于创建整个应用的路由器
import VueRouter from "vue-router";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Messgae from "@/pages/Messgae.vue";
import Detail from "@/pages/Detail.vue";

// 创建一个路由器
const router = new VueRouter({
    // 默认是hash模式，hash就是路径中带有#，hash的兼容性问题比较好
    mode:'hash',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {
                title:'关于'
            },
            // 独显路由守卫，只有前置
            beforeEnter(to, from, next) {
                console.log("aa")
                next()
            }
        },
        {
            name: 'zhuye ',
            path: '/home',
            component: Home,
            meta: {
                title:'主页'
            },
            children: [
                {
                    name:'xinwen',
                    path: 'news',
                    component: News,
                    meta:{
                        isAuth:true,
                        title:"新闻"
                    }
                },
                {
                    name:'xiaoxi',
                    path: 'Message',
                    component: Messgae,
                    meta:{
                        isAuth:true,
                    },
                    children: [
                        {
                            name:'xiangqing',
                            path: 'detail',
                            component: Detail,
                            // props第一种写法，对象
                            // props:{
                            //     key: 'value'
                            // }
                            // props第二种写法，布尔值，会将params中的参数传为props，但是只能是params传参
                            // props:true,
                            // props第三种写法，函数
                            props($route) {
                                return {id: $route.query.id, title: $route.query.title}
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

/*
 * 添加全局前置 路由守卫,每次路由跳转之前都会调用
 * 可以在这里校验登录状态或者token
 */
router.beforeEach((to, from, next) => {
    // if ((to.path === '/home/news' || to.path === '/home/message') && 权限) {
    //
    // }
    console.log(to)
    next()

    // if (to.meta.isAuth && localStorage.getItem("school") !== 'atguigu') {
    //     alert("学校名字不对")
    // } else {
    // }
})

/*
 * 后置路由守卫——初始化、每次路由切换之后被调用
 */
router.afterEach((to, from) => {
    document.title = to.meta.title ? to.meta.title : '啦啦啦'
})
export default router