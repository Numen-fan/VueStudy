// 人员相关
import axios from "axios";
import {nanoid} from "nanoid";
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, val) {
            if (val.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', val)
            }
        },
        addPersonServer(context) {
            axios.get('https://v1.hitokoto.cn/?c=f&encode=text').then(
                response => {
                    context.commit('ADD_PERSON', {name: response.data, id: nanoid()})
                },
                error => {
                    alert(error.message)
                }
            )

        }
    },
    mutations: {
        ADD_PERSON(state, val) {
            state.personList.unshift(val)
        }
    },
    state: {
        personList: [
            {name: '张三', id: 1}
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}