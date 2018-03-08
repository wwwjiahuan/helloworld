//14. vuex探秘
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count : 4
}

const mutations = {
    jia(state,obj) {
        state.count = state.count+obj.a-obj.b
    },
    jian(state) {
        state.count --
    }
}
//vuex 3. getters
const getters = {
    count:function(state) {
        return state.count += 100
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters
})