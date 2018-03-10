<template>
  <div id="hello">
      <button>{{txt}}</button>
      <span>{{ddddd}}</span>
  </div>
</template>

<script>
export default {
  name:'hello',
  props:['txt','ddddd'],
}
</script>

<style>
    #hello button {
        background-color: #ff6600;
        height: 15px;
        width: 100px;
        color: #ffffff;
    }
</style>
