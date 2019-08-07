<template>
	<div>
		<!-- 标题就是应该使用插槽实现 -->
		<HeaderTop>
			<template v-slot:winName>
				购物车
			</template>
		</HeaderTop>
		<div class="wrapper">
			<div class="content">
				<Food v-for="(food, index) in cartFoods" :key="index" :food="food" v-if="food.count"/>
				<!-- <MiniCart/> -->
				
				<div class="food_empty" v-if="!cartFoods[0]" @click="$router.replace('/home')"></div>
			</div>
		</div>
		<!-- 底部 -->
		<ShopAccount>
			<template v-slot:control>
					<RadioButton :food="foodType"/>
				    <div class="info">
				        <div class="top">全选</div>
				        <div class="bottom">已选<span id="count" class="count">{{totalCount || 0}}</span>件</div>
				    </div>
			</template>	
		</ShopAccount>
	</div>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import Food from '../../components/Food/Food.vue'
	import ShopAccount from '../../components/ShopAccount/ShopAccount.vue'
	import RadioButton from '../../components/RadioButton/RadioButton.vue'
	import BScroll from 'better-scroll'
	import {mapState} from 'vuex'

	export default {
		data() {
			return {
				foodType:{status: true}
			}
		},
		mounted() {
			// this.$nextTick(() => {
				this.scroll = new BScroll('.wrapper', {
					// click: true,
					tap: true,
				})
			// })
		},
		updated() {
			// console.log(111)
			this.scroll.refresh()
		},
		components: {
			HeaderTop,
			Food,
			ShopAccount,
			RadioButton
		},
		computed: {
			...mapState(['cartFoods', 'food', 'totalCount'])
		}
	}
</script>

<style lang="less" scoped>
	.wrapper {
		position: absolute;
		top: 50px;
		width: 100%;
		height: 565px;
		overflow-y: hidden;
		.food_empty {
	        position: absolute;
	        width: 100%;
	        height: 300px;
	        background-color: #fff;
	        background-image: url(./image/shoppingcart_empty.png);
	        background-repeat: no-repeat;
	        background-size: 115px 190px;
	        background-position: center 50px;
		}
	}
	.control {
	    position: relative;
	    width: 100px;
	    height: 50px;
	    .select {
	    	    position: absolute;
	    	    top: 17px;
	    	    left: 8px;
	    	    width: 16px;
	    	    height: 16px;
	    	    background-repeat: no-repeat;
	    	    background-image: url(./image/select_on.png);
	    	    background-size: 100% 100%;
	    	    background-position: center center;
	    	}
	    	.select-off {
	    		background-image: url(./image/select_off.png);
	    	}
	    	.info {
	    		    box-sizing: border-box;
	    		    width: 100%;
	    		    height: 50px;
	    		    padding-left: 32px;
	    		    padding-top: 8px;
	    		    padding-bottom: 8px;
	    		    // z-index:60;
	    		    .top {
	    		    	    height: 20px;
	    		    	    font-size: 14px;
	    		    	    color: #444;
	    		    	    text-align: left;
	    		    	    line-height: 20px;
	    		    	}
	    		    .bottom {
	    		    	    height: 14px;
	    		    	    font-size: 10px;
	    		    	    color: #888;
	    		    	    text-align: left;
	    		    	    line-height: 14px;
	    		    	}

	    		}
	    		
	}
</style>