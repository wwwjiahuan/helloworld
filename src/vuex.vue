// 14. vuex探秘
<template>
  <div id="app">
      <h1>Hello World</h1>
      <p>{{ $store.state.count}}</p>
      <button @click="$store.commit('jia')">+</button>
      <button @click="$store.commit('jian')">-</button>
  </div>
</template>
<script>
export default {
  
}
</script>
