export default {
    state: {

    },
    mutations: {

    },
    actions: {
        gethomeb({ commit }) {
            axios({
                url: 'https://www.easy-mock.com/mock/59b8c775e0dc663341a810fa/example/xiaoming',
                method: 'GET'
            }).then(res => {
                commit("changeList", res.data.data.list)
            })
        }
    }
}