//引入mutationtype
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
//引入index.js
import {
	reqSupportArea,
	reqFoodList,
	reqFruitsImage,
	reqIngredientsImage,
	reqSnakesImage,
	reqMilksImage,
	reqVegetablesImage
} from '../api/index.js'

//定义action

export default {
	//记录当前选中的tab下标
	updateSelectedIndex({commit, state}, selectedIndex) {
		commit(UPDATE_SELECTEDINDEX, selectedIndex)
	},	
	//同步更新购物车
	//需要两个参数，food  isAdd(true, false)
	updateFoodCount({commit}, {food, isAdd}) {
		if(isAdd) {
			// console.log(state.cartFruits)
			commit(INCREMENT_FOOD, {food})
			// console.log(food)
			// console.log(state)
		} else {
			commit(DECREMENT_FOOD, {food})
		}
	},
	//移除购物车中取消选中的食物
	judgeFoodAction({commit}, {food, status}) {
		if(status) {
			commit(REMOVE_FOOD, {food})
		} else {
			commit(RECOVER_FOOD, {food})
		}
	},
	//更新相应地址为默认地址
	updateAddressInfo({commit}, {addressIndex, addressItem}) {
		commit(UPDATE_ADDRESS_INFO, {addressIndex, addressItem})
	},
	//删除地址
	delAddressItem({commit}, addressIndex) {
		commit(DEL_ADDRESSITEM, addressIndex)
	},
	//添加地址
	addAddress({commit}, {addressItem}) {
		commit(ADD_ADDRESS, addressItem)
	},
	//设置当前所在地区
	setCurrentCity({commit}, index) {
		commit(SET_CURRENTCITY, index)
	},
	//异步获取支持地区
	async getSupportArea({commit}) {
		//发送跨域请求
		const result =  await reqSupportArea()
		//提交mutation
		// console.log(result)
		commit(GET_SUPPORTAREA, result)
	},
	//发送异步请求获取食品列表
	async getFoods({commit, state}, {foodIndex}) {
		let filter = {
			fields:{},
			where:{
				supportAreaId: state.currentCity.id,
				wareTypeId:state.foodTypeId[foodIndex]
			},
			skip: 0,
			limit: 5
		}
		filter = JSON.stringify(filter)
		//发送跨域请求
		
		// console.log(result.data.url)
		let foods, result;
		switch (foodIndex) {
			case 0:
				// statements_1
				foods = await reqFoodList({filter})
				result = await reqFruitsImage()
				break;
			case 1:
				// statements_1
				foods = await reqFoodList({filter})
				result = await reqIngredientsImage()
				break;
			case 2:
				// statements_1
				foods = await reqFoodList({filter})
				result = await reqSnakesImage()
				break;
			case 3:
				// statements_1
				foods = await reqFoodList({filter})
				result = await reqMilksImage()
				break;
			default:
				// statements_def
				foods = await reqFoodList({filter})
				result = await reqVegetablesImage()
				break;
		}
		let foodsImage = result.data.url
		// console.log(foodIndex)
		commit(GET_FOOD_LIST, {foods, foodsImage, typeIndex: foodIndex})
		// console.log(fruitList)
	},
	// //发送异步请求获取食材列表
	// async getIngredients({commit}, supportAreaId) {
	// 	let filter = {
	// 		fields:{},
	// 		where:{
	// 			supportAreaId: supportAreaId,
	// 			wareTypeId:"56c80db78d04c83d3d1dedea"
	// 		},
	// 		skip: 0,
	// 		limit: 5
	// 	}
	// 	filter = JSON.stringify(filter)
	// 	const ingredients = await reqFoodList({filter})
	// 	// console.log(ingredients);
	// 	const result = await reqIngredientsImage()	
	// 	const ingredientsImage = result.data.url
	// 	// console.log(ingredientsImage)
	// 	commit(GET_FOOD_LIST, {foods: ingredients, foodsImage: ingredientsImage, typeIndex: 1})
	// }
	// //发送异步请求获取食材列表
	// async getIngredients({commit}, supportAreaId) {
	// 	let filter = {
	// 		fields:{},
	// 		where:{
	// 			supportAreaId: supportAreaId,
	// 			wareTypeId:"56c80db78d04c83d3d1dedea"
	// 		},
	// 		skip: 0,
	// 		limit: 5
	// 	}
	// 	filter = JSON.stringify(filter)
	// 	const ingredients = await reqFoodList({filter})
	// 	// console.log(ingredients);
	// 	const result = await reqIngredientsImage()	
	// 	const ingredientsImage = result.data.url
	// 	// console.log(ingredientsImage)
	// 	commit(GET_FOOD_LIST, {foods: ingredients, foodsImage: ingredientsImage, typeIndex: 1})
	// }
}