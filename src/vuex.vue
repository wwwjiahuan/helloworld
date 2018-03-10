// 14. vuex探秘
<template>
  <div id="app">
      <h1>Hello World</h1>
      <p>{{ $store.state.count}} - {{count}}</p>
      <button @click="$store.commit('jia',{a:1})">+</button>
      <button @click=jian>-</button>
      <p>
          <!-- vuex 4. actions -->
        <button @click="jiaplus">+plus</button>
        <button @click="jianplus">-plus</button>
      </p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
//2. Mutations触发状态
import { mapMutations,mapGetters,mapActions } from 'vuex'
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
    computed:{
        ...mapState([
        "count"
        ]),
        //vuex 3. getters
        ...mapGetters([
            "count"
        ])
    },
    //2. Mutations触发状态
    methods:{
        ...mapMutations([
            'jia',
            'jian'
        ]),
        // vuex 4. actions
        ...mapActions([
            'jiaplus'
        ]),
        ...mapActions({
            jianplus:'jianplus'
        })
    }
}
</script>
