import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const first = { template: '<div>{{ $route.name }} first内容</div>' }
const second = { template: '<div>second内容</div>' }
const home = { template: '<div>home内容</div>' }

const firstFirst = { template: '<div>firstFirst内容{{$route.params.id}}</div>' }
const firstSecond = { template: '<div>firstSecond内容{{$route.params.uid}}</div>' }

const sdfs = {
	template: `
		<div>
			<h2>组件</h2>
			<router-view class="bbb"></router-view>
		</div>
	`
}
const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',name:'Home',component:home},
		{path:'/first',component:sdfs,
			children:[
				{path:'/',name:'Home-First',component:first},
				{path:'first',name:'Home-First-First',component:firstFirst},
				{path:'second',name:'Home-First-Second',component:firstSecond},
			]
		},
		{path:'/second',name:'Home-Second',component:second}
	]
})

new Vue({
	router,
	template:`
		<div id='r'>
			<h1>导航</h1>
			<p>{{ $route.name }}</p>
			<ol>
				<li><router-link to="/">home</router-link></li>
				<li><router-link to="/first">first</router-link></li>
					<ol>
						<li><router-link :to="{ name:'Home-First-First',params:{id:123,uid:111} }">firstFirst</router-link></li>
						<li><router-link :to="{ name:'Home-First-Second',params:{id:321,uid:222} }">firstSecond</router-link></li>
					</ol>
				<li><router-link to="/second">second</router-link></li>
			</ol>
			<router-view class="aaa"></router-view>
		</div>
	`
}).$mount('#app')