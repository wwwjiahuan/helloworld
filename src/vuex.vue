// 14. vuex探秘
<template>
  <div id="app">
      <h1>Hello World</h1>
      <p>{{ $store.state.count}} - {{count}}</p>
      <button @click="$store.commit('jia')">+</button>
      <button @click="$store.commit('jian')">-</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    //vuex 1. state访问状态对象v
    name:'app',
    // data(){
    //     return {
    //         count:0
    //     }
    // },
    // computed:{
    //     count(){
    //         return this.$store.state.count+10
    //     }
    // }
    computed:mapState([
        "count"
    ])
}
</script>
