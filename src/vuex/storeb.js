export default {
    state: {
        datab: []
    },
    mutations: {
        CHANGEDATAB(state, list) {
            state.datab = list
        }
    },
    actions: {
        gethomeb({ commit }) {
            axios({
                url: 'http://www.easy-mock.com/mock/59ba12e6e0dc663341a97644/example/mmdata',
                method: 'GET'
            }).then(res => {
                console.log(res)
                commit("CHANGEDATAB", res.data.data.list)
            })
        }
    }
}