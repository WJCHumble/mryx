import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import MyOrder from '../pages/MyOrder/MyOrder.vue'
import MyAccount from '../pages/MyAccount/MyAccount.vue'
import MyCoupon from '../pages/MyCoupon/MyCoupon.vue'
import MyAddress from '../pages/MyAddress/MyAddress.vue'
import Setting from '../pages/Setting/Setting.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import AddAddress from '../pages/MyAddress/AddAddress/AddAddress.vue'
import UpdateAddress from '../pages/MyAddress/UpdateAddress/UpdateAddress.vue'
import FoodDetail from '../pages/FoodDetail/FoodDetail.vue'


Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/home',
  		component: Home,
  	},
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/myorder',
      component: MyOrder
    },
    {
      path: '/myaccount',
      component: MyAccount
    },
    {
      path: '/mycoupon',
      component: MyCoupon
    },
    {
      path: '/myaddress',
      component: MyAddress,
      children: [
        {
          path: 'addaddress',
          component: AddAddress
        },{
          path: 'updateaddress/:index',
          component: UpdateAddress
        }
      ]
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
  	//设置默认访问的路由 路由重定向
  	{
  		path: '/',
  		redirect: '/home'
  	},
    {
      path: '/fooddetail/:type/:index',
      component: FoodDetail
    }
  ]
})
