// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import '../static/css/identify.css'
import {
	Navbar, 
	TabItem, 
	Search, 
	Switch, 
	Field, 
	Cell, 
	Button,
	TabContainer,
	TabContainerItem,
	Toast
	// MessageBox,
} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import VueTouch from 'vue-touch'
import './mock/mockServer.js' //加载mockServer

Vue.config.productionTip = false
//使用mint-ui注册全局组件
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Search.name, Search)
Vue.component(Switch.name, Switch)
Vue.component(Field.name, Field)
Vue.component(Cell.name, Cell)
Vue.component(Button.name, Button)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.use(VueTouch, {name: 'v-touch'})

Vue.prototype.$toast =  Toast
// window.addEventListener('touchmove', { passive: false })
// VueTouch.config.swipe = {
// 	threshold: 
// }
// Vue.component(MessageBox.name, MessageBox)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用vuex
  components: { App },
  template: '<App/>'
})



