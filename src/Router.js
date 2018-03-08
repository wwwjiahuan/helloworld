//9. 路由的过渡动画
import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from './transition.vue'//10.2 外部引入模板
Vue.use(VueRouter)

const Home = {
	template:`
		<div>
			<h2>Home</h2>
			<p>This is home</p>
		</div>
	`
}

// const Parent = {
// 	template:`
// 		<div>
// 			<h2>Parent</h2>
// 			<p>This is Parent</p>
// 		</div>
// 	`
// }
const Page404 = {
	template:`
		<div>
			<h2>Error 404</h2>
		</div>
	`,
	//12. 路由里的勾子
	beforeRouteEnter:(to,from,next) => {
		console.log(to)
		console.log(from)
		next()
	},
	beforeRouteLeave:(to,from,next) => {
		console.log(to)
		console.log(from)
		next()
	}
}

const router = new VueRouter({
	mode:'history',
	// 10.3 mode:'hash'
	base:__dirname,
	routes:[
		{path: '/',component:Home},
		{path: '/Parent',component:Parent,
		//12. 路由里的勾子
			beforeEnter:(to,from,next) => {
				console.log(to)
				console.log(from)
				//next()//可以
				//next(false)//不可以
				next({path:'./sfsgdfg'})
			}
		},
		{path: '*',component:Page404}//10.1用*处理路径错误
	]
})

new Vue({
	router,
	//10. watch监控动画
	data() {
		return {
			aaa:'fade1'
		}
	},
	template:`
		<div id="app">
			<h1>This is Transition</h1>
			<ul>
				<li><router-link to="/">/</li>
				<li><router-link to="/Parent">/Parent</li>
				<li><router-link to="/adadsfsfs">not found</li>
			</ul>
			<transition :name="aaa" mode="out-in">
				<router-view></router-view>
			<transition>
		</div>
	`
	//10. watch监控动画
	,watch:{
		'$route' (to,from) {
			if (from.path == '/Parent') {
				this.aaa = 'fade1'
			}else{
				this.aaa = 'fade2'
			}
		}
	}
}).$mount('#app')

//7. 路由重定向 8. alias别名
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// const first = { template: '<div>{{ $route.name }} first内容</div>' }
// const second = { template: '<div>second内容</div>' }
// const home = { template: '<div>home内容</div>' }

// const firstFirst = { template: '<div>firstFirst内容{{$route.params.id}}</div>' }
// const firstSecond = { template: '<div>firstSecond内容{{$route.params.uid}}</div>' }

// const sdfs = {
// 	template: `
// 		<div>
// 			<h2>组件</h2>
// 			<router-view class="bbb"></router-view>
// 		</div>
// 	`
// }
// const router = new VueRouter({
// 	mode:'history',
// 	base:__dirname,
// 	routes:[
// 		{path:'/',name:'Home',component:home},
// 		{path:'/first',component:sdfs,
// 			children:[
// 				{path:'/',name:'Home-First',component:first},
// 				{path:'first',name:'Home-First-First',component:firstFirst},
// 				{path:'second',name:'Home-First-Second',component:firstSecond},
// 				{path:'third',redirect:'first'},
// 			]
// 		},
// 		{path:'/second',name:'Home-Second',component:second,alias:['/gogo','/haha']},//8. alias别名
// 		{path:'/aaa/:id',component:firstFirst},
// 		{path:'/bbb/:id',redirect:'/aaa/:id'},
// 		{
// 			path:'/ccc/:id',
// 			redirect:xxxx=> {
// 				const { hash,params,query } = xxxx;
// 				if (params.id == '001') {
// 					return '/'
// 				}
// 			}
// 		}
// 	]
// })

// new Vue({
// 	router,
// 	template:`
// 		<div id='r'>
// 			<h1>导航</h1>
// 			<p>{{ $route.name }}</p>
// 			<ol>
// 				<li><router-link to="/">home</router-link></li>
// 				<li><router-link to="/first">first</router-link></li>
// 					<ol>
// 						<li><router-link :to="{ name:'Home-First-First',params:{id:123,uid:111} }">firstFirst</router-link></li>
// 						<li><router-link :to="{ name:'Home-First-Second',params:{id:321,uid:222} }">firstSecond</router-link></li>
// 						<li><router-link to="third">third</router-link></li>

// 					</ol>
// 				<li><router-link to="/second">second</router-link></li>
// 				<li><router-link to="/gogo">gogo</router-link></li>
// 				<li><router-link to="/haha">haha</router-link></li>


// 				<li><router-link to="/aaa/111">aaa</router-link></li>
// 				<li><router-link to="/bbb/222">bbb</router-link></li>
// 				<li><router-link to="/ccc/001">ccc</router-link></li>
// 			</ol>
// 			<router-view class="aaa"></router-view>
// 		</div>
// 	`
// }).$mount('#app')



//6. query&append;&exact;
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)


// const users = {
// 	template:`
// 		<div>
// 			<h2>users</h2>
// 			<router-view></router-view>
// 		</div>
// 	`
// }
// const user = {
// 	template:`
// 		<div>
// 			{{$route.params.username}}-
// 			{{$route.query.aaa}}
// 		</div>
// 	`
// }
// const Home = {
// 	template:`
// 		<div>
// 			<h2>Home</h2>
// 		</div>
// 	`
// }
// const first = {
// 	template:`
// 		<div>
// 			<h2>first</h2>
// 		</div>
// 	`
// }
// const about = {
// 	template:`
// 		<div>
// 			<h2>about</h2>
// 		</div>
// 	`
// }
// const router = new VueRouter({
// 	mode: 'history',
// 	base: __dirname,
// 	routes:[
		
// 			{ path:'/',name:'Home',component:Home },
// 			{ path:'/',name:'about',component:about },
// 			{ path:'/first',name:'First',component:first },
// 			{ path:'/users',component:users,
// 				children:[
// 					{path:':username',name:'user',component:user}
// 				] 
// 			}
// 	]
// })

// new Vue({
// 	router,
// 	template:`
// 		<div id='r'>
// 			<h1>导航</h1>
// 			<ol>
// 				<li><router-link to="/">/</router-link></li>
// 				<li><router-link to="/first">first</router-link></li>
// 					<ol>
// 						<li>
// 							<router-link :to="{path:'/users/wos',query:{aaa:'bbb'}}">
// 								wos
// 							</router-link>
// 						</li>
// 						<li>
// 							<router-link :to="{path:'/users/wodddds',query:{aaa:'ccc'}}">
// 								wodddds
// 							</router-link>
// 						</li>
// 						<li>
// 							<router-link to="about" append>
// 								append
// 							</router-link>
// 						</li>
// 						<li>
// 							<router-link to="about" exact>
// 								exact
// 							</router-link>
// 						</li>
// 					</ol>

// 			</ol>
// 			<router-view></router-view>
// 		</div>
// 	`
// }).$mount('#app')


//5. url传值
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// const router = new VueRouter({
// 	mode: 'history',
// 	base: __dirname,
// 	routes:[
		
// 			{ path:'/' },
// 			{ path:'/params/:aaa/:bbb' },
// 			{ path:'/params-regex/:id(\\d+)'}
		
// 	]
// })

// new Vue({
// 	router,
// 	template:`
// 		<div>
// 			<h1>morning</h1>
// 			<ul>
// 				<li><router-link to="/">/</router-link></li>
// 				<li><router-link to="/params/111/222">/params/111/222</router-link></li>
// 				<li><router-link to="/params-regex/555">/params-regex/555</router-link></li>
// 			</ul>
// 			<p>Show</p>
// 			<pre><code>
// 				{{ JSON.stringify($route,null,2) }}
// 			</code></pre>
// 		</div>
// 	`
// }).$mount('#app')


// 1.0
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// const first = { template: '<div>{{ $route.name }} first内容</div>' }
// const second = { template: '<div>second内容</div>' }
// const home = { template: '<div>home内容</div>' }

// const firstFirst = { template: '<div>firstFirst内容{{$route.params.id}}</div>' }
// const firstSecond = { template: '<div>firstSecond内容{{$route.params.uid}}</div>' }

// const sdfs = {
// 	template: `
// 		<div>
// 			<h2>组件</h2>
// 			<router-view class="bbb"></router-view>
// 		</div>
// 	`
// }
// const router = new VueRouter({
// 	mode:'history',
// 	base:__dirname,
// 	routes:[
// 		{path:'/',name:'Home',component:home},
// 		{path:'/first',component:sdfs,
// 			children:[
// 				{path:'/',name:'Home-First',component:first},
// 				{path:'first',name:'Home-First-First',component:firstFirst},
// 				{path:'second',name:'Home-First-Second',component:firstSecond},
// 			]
// 		},
// 		{path:'/second',name:'Home-Second',component:second}
// 	]
// })

// new Vue({
// 	router,
// 	template:`
// 		<div id='r'>
// 			<h1>导航</h1>
// 			<p>{{ $route.name }}</p>
// 			<ol>
// 				<li><router-link to="/">home</router-link></li>
// 				<li><router-link to="/first">first</router-link></li>
// 					<ol>
// 						<li><router-link :to="{ name:'Home-First-First',params:{id:123,uid:111} }">firstFirst</router-link></li>
// 						<li><router-link :to="{ name:'Home-First-Second',params:{id:321,uid:222} }">firstSecond</router-link></li>
// 					</ol>
// 				<li><router-link to="/second">second</router-link></li>
// 			</ol>
// 			<router-view class="aaa"></router-view>
// 		</div>
// 	`
// }).$mount('#app')


//2.0
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// const first = { template: '<div>{{ $route.name }} first内容</div>' }
// const second = { template: '<div>second内容</div>' }
// const home = { template: '<div>home内容</div>' }
// const hehe = { template: '<div>hehe</div>' }
// const router = new VueRouter({
// 	mode:'history',
// 	base:__dirname,
// 	routes:[
// 		{path:'/',name:'Home',components:{
// 			default:home,
// 			left:first,
// 			right:second
// 		}},
// 		{path:'/first',components:{
// 			default:home,
// 			left:first,
// 			right:second
// 		}},
// 	]
// })

// new Vue({
// 	router,
// 	template:`
// 		<div id='r'>
// 			<h1>导航</h1>
// 			<p>{{ $route.name }}</p>
// 			<ol>
// 				<li><router-link to="/">home</router-link></li>
// 				<li><router-link to="/first">first</router-link></li>
// 			</ol>
// 			<router-view class="aaa"></router-view>
// 			<router-view class="bbb" name="left" style="float:left;width:50%;height:200px;background-color:#ff6600"></router-view>
// 			<router-view class="ccc" name="right" style="float:left;width:50%;height:200px;background-color:#ff0000"></router-view>
// 		</div>
// 	`
// }).$mount('#app')