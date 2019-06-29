##### 项目描述：一个基于优鲜食物的移动端购物网站（大部分功能模块已实现，适合有一定Vue基础的人学习）
##### 技术栈：Vue CLI+Vue Router+Vuex+Less+Mint UI+axios+Swiper+Animate+Better Scroll+Mock+Vue Touch
### 项目展示
**PS:此处只列举部分**
1. 首页
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019062915431443.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMDQ5NDQ1,size_16,color_FFFFFF,t_70)
2. 城市选择
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190629154417256.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMDQ5NDQ1,size_16,color_FFFFFF,t_70)
3. 加入购物车
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190629154517729.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMDQ5NDQ1,size_16,color_FFFFFF,t_70)
4. 商品详情
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190629154600756.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMDQ5NDQ1,size_16,color_FFFFFF,t_70)
5. 个人中心
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190629154637568.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMDQ5NDQ1,size_16,color_FFFFFF,t_70)
6. 收获地址
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190629154710992.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMDQ5NDQ1,size_16,color_FFFFFF,t_70)
### 基本使用
#### 使用less
	
	cnpm install less less-loader -S-D

#### 使用swiper

	cnpm install swiper -S-D
	//在组件中引入
	//引用swiper
	import Swiper from 'swiper' 
	//引入css文件
	import 'swiper/dist/css/swiper.min.css'
	
	//然后在挂载的时候初始化swiper
	mounted() {
		    this.nextTick(() => {
		    	this.scroll = new Swiper('.swiper-container', {
			    autoplay: true,
			    // 如果需要分页器
		        pagination: {
		          el: '.swiper-pagination',
		        },
		    })
		    })
	}

#### 使用mint-ui

	cnpm install mint-ui -S
	cnpm install babel-plugin-component -S-D
	打开.babelrc进行配置，在plugin插入一项配置
	例如："plugins": ["transform-vue-jsx", "transform-runtime", ["component", [
		  {
		    "libraryName" : "mint-ui",
		    "style": true
		  }
		  ]]]
	//此处是插入了component这个
	使用：main.js中import 'mint-ui/lib/style.css'
				  import {Navbar, TabItem} from 'mint-ui'
### 使用vuex

	cnpm install vuex -S
	创建store文件夹
		- index.js
		- state.js
		- getters.js
		- mutation-types.js
		- actions.js
		- mutations.js
		需要注意：每个.js文件写的时候都需要注意导出 export default{} 或 export const ....
				 并且state getters actions mutations都是有多个  每个间要用,号隔开
	在index.js 中分别引入(import)state.js getters.js actions.js mutations.js vue vuex
		使用vuex	   Vue.use(vuex)
		创建vuex   export default Vuex.Store({
						state,
						getters,
						actions,
						mutations,	
					})
	在main.js中为vue实例挂载vuex
		引入store/index.js
		在实例中挂载
### 使用animate.css

	cnpm install animate.css
	在main.js中引入import animate from 'animate.css'	
	在页面中使用<transition enter-active-class="animated fadeIn"></transition>

### 使用better-scroll

	使用better-scroll实现各种滚动效果
	npm install better-scroll -S
	具体使用看官方文档https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/installation.html#npm
	this.$nextTick(() => {
		if(!this.scroll) {
			this.scroll = new BScroll(this.$refs.wrapper, {
				click: true
			})
		} else {
			this.scroll.refresh()
		}
	})
	需要注意的是子元素的高度一定要大于父元素的高度，子元素设置超出隐藏
### 跨域访问接口

正常情况下，要实现跨域，是通过后台进行配置响应的响应头的参数。
vue-cli则跨域通过node.js代理服务器实现跨域请求
	

```
文件路径 config/index.js
		proxyTable: {
		   '/api': { // 匹配所有以 '/api'开头的请求路径  即匹配的是axios中传入的url参数，/api/user  这种形式才会匹配
		     target: 'http://d.apicloud.com/mcm/api', // 代理目标的基础路径
		     changeOrigin: true, // 支持跨域
		     pathRewrite: {// 重写路径: 去掉路径中开头的'/api'  当真正的接口不需要api时重写
		       '^/api': ''  //去掉匹配到的路径的/api  如果不去掉就删除pathRewrite
		     }
		   } 
		}
		//最后得到的路径就是 target+url
		//假设请求的url为 /api/user
		//经过node.js代理后  真正请求的是 http://d.apicloud.com/mcm/api/user
		//需要注意的是F12显示的仍然是localhost:8080/api/usesr  但实际上发送的地址是经过node.js代理服务器实现的跨域请求

	请求头
		const instance = axios.create({
		  baseURL: '/api',
		  timeout: 1000,
		  headers: {
		  	'X-APICloud-AppId': 'A6914327011091',
		  	'X-APICloud-AppKey': '8ac17d22e49cb7982d82796097cec52a6c7cd01d.1475375422841'
		  }
		})
		//get请求
		promise = instance.get(url)
		//post请求
		promise = instance.post(url)
```
### 关于浮点数计算的问题

	state.totalPrice = parseFloat((state.totalPrice + food.price).toFixed(2))
	需要注意：不能直接(state.totalPrice + food.price).toFixed(2)
			 因为toFixed() 返回一个数值的字符串表现形式。
### 首页左右滑动效果

	组件用的是mint-ui提供的当时 存在一个问题  它只提供了滑动效果 不会和tab动态的关联起来，所以借助了vue-touch
	vue-touch使用: 
		cnpm install vue-touch@text
	main.js绑定vue
		import VueTouch from 'vue-touch'
		Vue.use(VueTouch, {name: 'v-touch'})
	FoodList中使用
		<v-touch @swipeLeft=""></v-touch>  //从左往右滑动
		<v-touch @swipeRight=""></v-touch> //从右往左滑
	    绑定事件，使用this.$emit('v-swipeLeft')  //自定义事件
	Home中使用
		<FoodList @v-swipeLeft=""/>
		绑定事件
			触发nav的updateSelectedIndex事件
			通过this.$refs.nav.updateSelectedIndex(更改的下标) //要先给nav绑定ref="nav"
	优化建议：是否可以通过watch监听navBar的下标变化，如果变化了，在this.$nextTick中执行初始化方法

### mockjs图片资源
	
	安装： cnpm install mockjs -S
	在mock文件目录下新建
		data.js  
		   格式： Json数据类型
		mockServer.js
		   import Mock from 'mockjs'
		   import data from './data.json'

		   // 返回水果的接口
		   Mock.mock('/fruits', {code:0, data: data.fruits})
		   // 返回食材的接口
		   Mock.mock('/ingredients', {code:0, data: data.ingredients})
		   // 返回零食的接口
		   Mock.mock('/snacks', {code:0, data: data.snacks})
		   //返回牛奶的接口
		   Mock.mock('/milks', {code:0, data: data.milks})
		   //返回蔬菜的接口
		   Mock.mock('/vegetables', {code:0, data: data.vegetables})
	在main.js中引入 
		import './mock/mockServer.js'
