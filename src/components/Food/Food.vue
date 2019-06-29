<template>
	<div>
		<section>
			<!-- <div class="select" v-if="$route.path=='/shopcart'"></div>	 -->
			<RadioButton ref="radioButton" @click.native="updateCart" :foodType="true"  v-if="$route.path=='/shopcart'" :food="food"/>
		    <div class="ware ware-1" :style="{height:$route.path=='/shopcart'?'132px':'145px',
		        			}">
		        <div class="content">
		            <img class="thumbnail" :src="food.thumbnail.url" :style="{left:$route.path=='/shopcart'?'30px':'0px'}">
		            <div class="info" 
		            :style="{paddingLeft:$route.path=='/shopcart'?'139px':'112px',
		        			}">
		                <div class="name">{{food.name}}</div>
		                <div class="description" v-if="$route.path=='/home'">
		                 {{food.description}}
		                </div>
		                <div class="price-tag">
		                    <span class="price">￥{{food.price}}</span>
		                    <span class="unit">/1盒</span>
		                </div>
		                <div class="origin-price" v-if="$route.path=='/home'">超市:
		                    <del>{{food.originPrice}}元</del>
		                </div>
		            </div>
		            <CartControl :food="food"></CartControl>
		        </div>
		    </div>
		</section>
	</div>
</template>

<script>
	import CartControl from '../CartControl/CartControl.vue'
	import RadioButton from '../RadioButton/RadioButton.vue'
	import Vue from 'vue'
	import {mapState} from 'vuex'
	export default {
		props: {
			food: {
				type: Object,
				default: function() {
					return {}
				}
			}
		},
		components: {
			CartControl,
			RadioButton
		},
		// computed: {
		// 	...mapState(['food'])
		// },
		methods: {
			updateCart () {
				// console.log(111)
				//触发action  在购物车中取出取消选中的
				// console.log(this.$refs.radioButton._data.status)
				//定义是否选中状态变量
				let status =! this.food.status
				Vue.set(this.food, 'status', status)
				// if (status) {
					//触发action  从cartFoods[]中除去不被选中的食物
					console.log("移除")
					console.log(status)
					// console.log(this.$store.state.food)
					this.$store.dispatch("judgeFoodAction", {food: this.food, status: status})
					// console.log(this.$store.state.cartFoods)
				// }
			}
		}
	}
</script>

<style lang="less" scoped>
	section {
	    position: relative;
	    width: 100%;
	    height: auto;
	    box-sizing: border-box;
	    padding: 0 8px;
	    .ware-1 {
	        position: relative;
	        width: 100%;
	        // height: 145px;
	        box-sizing: border-box;
	        padding-top: 15px;
	        padding-bottom: 10px;
	        border-bottom: 1px solid #d1d1d1;
	        top: 0px!important;
	        .thumbnail {
	        	    position: absolute;
	        	    top: 20px;
	        	    // left: 0px;
	        	    height: 100px;
	        	    width: 108px;
	        	}
	        .info {
	        	    width: 100%;
	        	    height: 95px;
	        	    box-sizing: border-box;
	        	    // padding-left: 112px;
	        	    padding-right: 28px;
	        	    .name {
	        	    	    width: 100%;
	        	    	    height: 15px;
	        	    	    color: #555555;
	        	    	    margin-top: 14px;
	        	    	    font-size: 15px;
	        	    	}
	        	    .description {
	        	    	    margin-top: 10px;
	        	    	    width: 100%;
	        	    	    height: 13px;
	        	    	    font-size: 13px;
	        	    	    color: #9d9d9d;
	        	    	}
	        	    .price-tag {
	        	    	    margin-top: 10px;
	        	    	    width: 100%;
	        	    	    height: 12px;
	        	    	    font-size: 12px;
	        	    	    vertical-align: top;
	        	    	    .price {
	        	    	    	    color: #e3007f;
	        	    	    	}
	        	    	    .unit {
	        	    	    	    font-size: 8px;
	        	    	    	    color: #cbcbcb;
	        	    	    	}
	        	    	}
	        	    .origin-price {
	        	    	    margin-top: 5px;
	        	    	    width: 100%;
	        	    	    height: 10px;
	        	    	    font-size: 10px;
	        	    	    color: #d3d3d3;
	        	    	}
	        	}
	    }
	    .push-status {
	        width: 100%;
	        height: 40px;
	        font-size: 16px;
	        color: #888;
	        line-height: 40px;
	        text-align: center;
	        background-color: #fff;
	    }
	    .active {
	        opacity: 0.7;
	    }
	}	
</style>