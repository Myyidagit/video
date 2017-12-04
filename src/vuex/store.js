import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
// import storea from "./storea"
// import storeb from "./storeb"
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    // modules: {
    //     storeb,
    //     storea
    // },
    // strict: debug
    state: {
        obj: [],
        num: 0,
        loading: false,
        cartList: [],
        allNum: 0
    },
    mutations: {
        CHANGELOADING(state) {
            state.loading = !state.loading
        },
        JIA(state, i) {
            state.obj += i;
        },
        changeList(state, list) {
            state.obj = list
        },
        changeallNum() {
            state.allNum++
        },
        changeNum(state, item) {
            state.allNum++
                var falg = false;
            state.cartList.map(items => {
                if (item.title == items.title) {
                    falg = true;
                    items.count++
                }
            })
            if (falg == false) {
                Vue.set(item, 'count', 1);
                state.cartList.push(item)
            }
        },
        JIAN(state, item) {
            state.allNum--;
            state.cartList.map((items, index) => {
                if (item.title == items.title) {
                    if (item.count == 1) {
                        state.cartList.splice(index, 1)
                    } else {
                        item.count--
                    }
                }
            })
        }
    },
    actions: {
        gethomeaData({ commit }) {
            axios({
                url: 'https://www.easy-mock.com/mock/59b8c775e0dc663341a810fa/example/xiaoming',
                method: 'GET'
            }).then(res => {
                console.log(res.data.data.list)
                commit("changeList", res.data.data.list)
            })
        }
    },
    getters: {

    }
})