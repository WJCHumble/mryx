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
	reqFruitsImage
} from '../api/index.js'

//定义action

export default {
	//记录当前选中的tab下标
	updateSelectedIndex({commit}, selectedIndex) {
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
	async getFruitList({commit}, supportAreaId) {
		let filter = {
			fields:{},
			where:{
				supportAreaId: supportAreaId,
				wareTypeId:"56c80da883af652643474b6b"
			},
			skip: 0,
			limit: 5
		}
		filter = JSON.stringify(filter)
		//发送跨域请求
		const fruitList = await reqFoodList({filter})
		const result = await reqFruitsImage()
		// console.log(result.data.url)
		let fruitsImage = result.data.url
		commit(GET_FOOD_LIST, {fruitList, fruitsImage})
		// console.log(fruitList)
	}
}