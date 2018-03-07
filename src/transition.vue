//9. 路由的过渡动画
<template>
	<div>
		<button v-on:click="show =! show">show/hide text</button>
		<transition name="fade">
			<p v-if="show">Hello</p>
		</transition>
	</div>
</template>

<script>
	export default{
		name:'demo',
		data() {
			return{
				show:true
			}
		}
	}
</script>

<style>
	.fade-enter-active,.fade-leave-active {
		transition: opacity ,1s
	}
	.fade-enter,.fade-leave-active {
		opacity: 0
	}
</style>
