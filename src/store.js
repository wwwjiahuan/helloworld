//14. vuex探秘
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count : 15
}
//mutations是同步的
const mutations = {
    jia(state,obj) {
        state.count ++;
        state.count -- 
    },
    jian(state) {
        state.count = state.count-2
    }
}
//vuex 3. getters
const getters = {
    count:function(state) {
        return state.count += 1
    }
}
// vuex 4. actions
const actions = {
    jiaplus(context) {
        context.commit('jia',{a:1});
        setTimeout(()=> {
            context.commit('jian')
        },3000)
    },
    jianplus(context) {
        context.commit('jian')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})