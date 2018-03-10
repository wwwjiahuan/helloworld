<template>
  <div id="app">
    <p>propers使用</p>
    <p>
      <hello txt="HelloWorld" v-bind:ddddd="btnText"></hello>
    </p>
    <p>
      <input type="text" v-model="btnText">
    </p>
  </div>
</template>

<script>
import hello from './hello.vue'

export default {
  name: 'app',
  components:{hello},
  data(){
    return{
      btnText:'hello world',
    }
  },
  methods:{

    beforeCreate:function(){
		console.log("1-beforeCreate 初始化之后")
    },
    created:function(){
      console.log("2-created 创建完成")
    },
    beforeMount:function(){
      console.log("3-beforeMount 挂载之前")
    },
    mounted:function(){
      console.log("4-mounted 被创建")
    },
    beforeUpdate:function(){
      console.log("5-beforeUpdate 数据更新前")
    },
    updated:function(){
      console.log("6-updated 被更新后")
    },
    activated:function(){
      console.log("7-activated")
    },
    deactivated:function(){
      console.log("8-deactivated")
    },
    beforeDestroy:function(){
      console.log("9-beforeDestroy 销毁之前")
    },
    destroyed:function(){
      console.log("10-destroyed 销毁之后")
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
