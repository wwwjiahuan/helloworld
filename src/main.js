// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//14. vuex探秘
import store from './store'
import vuex from './vuex.vue'

new Vue({
    el:'#app',
    store,
    render:xx=>xx(vuex)
})
//import Router from './Router'
// import transition from './transition.vue' 

// new Vue({
// 	el:'#demo',
// 	render:xx => xx(transition)
// })