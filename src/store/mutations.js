import Vue from 'vue'
import {
	DECREMENT_FOOD,
	INCREMENT_FOOD,
	UPDATE_SELECTEDINDEX,
	REMOVE_FOOD,
	RECOVER_FOOD,
	GET_SUPPORTAREA,
	UPDATE_ADDRESS_INFO,
	DEL_ADDRESSITEM,
	ADD_ADDRESS,
	SET_CURRENTCITY,
	GET_FOOD_LIST
} from './mutation-types.js'

export default {
	//改变当前选中下标
	[UPDATE_SELECTEDINDEX](state, selectedIndex) {
		state.selectedIndex = selectedIndex
	},
	//将水果加入购物车
	[INCREMENT_FOOD](state, {food}) {
		//通过给全局vue动态给food增加一个count属性来计数
		// console.log(state.cartFoods)
		// console.log(food)
		// console.log((state.cartFoods).find(food => food = food))
		if(!food.count) {
			Vue.set(food, 'count', 1)
			Vue.set(food, 'totalPrice', food.price)
			Vue.set(food, 'status', false)
			// console.log(food.price)
			// console.log(1)
		} else {
			food.count++
			// parseFloat((food.totalPrice + food.price).toFixed(2))
			food.totalPrice = parseFloat((food.totalPrice + food.price).toFixed(2))
			// console.log(food.totalPrice)
			// console.log(food.count)
		}
		// console.log(food.count)
		state.totalCount++
		state.totalPrice = parseFloat((state.totalPrice + food.price).toFixed(2))
		state.cartFoods.push(food)
		
	},
	//将食物从购物车中去除
	[DECREMENT_FOOD](state, {food}) {
		//保险起见，先判断有值再进行减
		if(food.count) {
			food.count--
			state.totalCount--
			state.totalPrice = parseFloat((state.totalPrice - food.price).toFixed(2))
			state.cartFoods.splice(state.cartFoods.lastIndexOf(food), 1)
		}
	},
	//移除购物车中取消选中的食物
	[REMOVE_FOOD](state, {food}) {
		state.cartFoods = state.cartFoods.filter(function(item) {
			if(item.name === food.name) {
				state.tempCartFoods.push(item)
				state.totalPrice = parseFloat((state.totalPrice - item.price).toFixed(2))
				state.totalCount--
			}
			// return (item.name !== food.name)
			return item
		})
		
		// console.log(state.cartFoods)
	},
	[RECOVER_FOOD](state, {food}) {
		state.tempCartFoods.forEach(item => {
			state.totalPrice = parseFloat((state.totalPrice + item.price).toFixed(2))
			state.totalCount++
			// state.cartFoods.push(item)
		})
		state.tempCartFoods = [];
		// console.log(state.cartFoods)
	},
	[UPDATE_ADDRESS_INFO](state, {addressIndex, addressItem}) {
		// console.log(addressItem.default_)
		if (addressItem.default_) {
			state.myAddress.map((item, index) => {
				// console.log(item)
				if(item.default_ && index != addressIndex) {
					item.default_ = false
				}
			})
		}
		state.myAddress[addressIndex] =  addressItem	
	},
	//删除地址
	[DEL_ADDRESSITEM](state, addressIndex) {
		state.myAddress.splice(addressIndex, 1)
	},
	//添加地址
	[ADD_ADDRESS](state, addressItem) {
		state.myAddress.push(addressItem)
	},
	[SET_CURRENTCITY](state, index) {
		state.currentCity = state.supportArea[index]
	},
	//获取用户支持地区列表
	[GET_SUPPORTAREA](state, result) {
		state.supportArea = result
	},
	[GET_FOOD_LIST](state, {foods, foodsImage, typeIndex}) {
		// console.log(foods)
		foodsImage.forEach((item, index) => {
			foods[index].thumbnail.url = item.url
			// console.log(fruitList.img)
		})

		// state.foods[typeIndex] = foods
		
		// console.log(state.fruitList)
		let foodType = state.foodType[typeIndex]
		// console.log(foodType)
		state[foodType] = foods
		// console.log(state[foodType])

	}
	
}