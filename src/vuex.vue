// 14. vuex探秘
<template>
  <div id="app">
      <h1>Hello World</h1>
      <p>{{ $store.state.count}} - {{count}}</p>
      <button @click="$store.commit('jia',{a:10,b:5})">+</button>
      <button @click=jian>-</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
//2. Mutations触发状态
import { mapMutations } from 'vuex'
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
    ]),
    //2. Mutations触发状态
    methods:mapMutations([
        'jia',
        'jian'
    ])
}
</script>
