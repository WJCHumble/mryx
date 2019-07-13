<template>
	<div>
		<HeaderTop>
			<template v-slot:winName>商品详情</template>
		</HeaderTop>
		<section>
		    <!-- <div id="picture" class="picture"></div> -->
		   <div class="swiper-container" v-if="food.length!==0">
		      <div class="swiper-wrapper">
		        <div class="swiper-slide">
		        	<img style="margin-left:100px;margin-bottom:40px" :src="food.thumbnail.url" height="174" width="176" alt="">
		        </div>
		        <div class="swiper-slide">
		        	<img style="margin-left:100px;margin-bottom:40px" :src="food.thumbnail.url" height="174" width="176" alt="">
		        </div>
		      </div>
			  <div class="swiper-pagination"></div>
		    </div>
		    <div class="info-name">
		        <div id="wareName" class="name">{{food.name}}</div>
		        <div id="description" class="description">{{food.description}}</div>
		    </div>
		    <div class="info-price">
		        <div id="price" class="price">{{food.price}}</div>
		        <div class="other">
		            <div class="origin-price">
		                <del id="originPrice">原价：{{food.originPrice}}</del>
		            </div>
		            <div id="unit" class="unit">规格：{{food.unit}}件</div>
		            <div id="detail" class="place">产地：中国</div>
		        </div>
		    </div>
		    <div class="info-discount">
		        <div class="name">优惠活动：</div>
		        <div class="value">全场满49元包邮</div>
		    </div>
		    <div class="push">
		        <div class="top">“亚当和夏娃都无法抵挡的禁果诱惑”</div>
		        <div class="bottom">下滑查看商品详情</div>
		    </div>
		</section>
		<ShopAccount :food="food">
			<template class="cart-control" v-slot:control>
				<CartControl :food="food"/>
				<!-- qqqqqq -->
			</template>
		</ShopAccount>
	</div>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import ShopAccount from '../../components/ShopAccount/ShopAccount.vue'
	import CartControl from '../../components/CartControl/CartControl.vue'
	import Vue from 'vue'
	// import {Lazyload} from 'mint-ui'
	import Swiper from 'swiper' 
	//引入css文件
	import 'swiper/dist/css/swiper.min.css'
	import {mapState} from 'vuex'
	export default {
		mounted() {
			this.$nextTick(() => {
				// Vue.set(this.fruit, 'totalPrice', 0)
				this.food = this.$store.state[this.$route.params.type]
				this.foodIndex = this.$route.params.index
				// this.food = this.$store.state[this.$route.params.type][this.$route.params.index]
				this.food = this.food[this.foodIndex]
			})
		},
		updated() {
			new Swiper('.swiper-container', {
	     //    direction: 'vertical', // 垂直切换选项
		    // loop: true, // 循环模式选项
			    autoplay: true,
			    // 如果需要分页器
		        pagination: {
		          el: '.swiper-pagination',
		        },
		    })
		},
		components: {
			HeaderTop,
			ShopAccount,
			CartControl
		},
		data() {
			return {
				food: [],
				foodIndex: 0
			}
		}
	}
</script>

<style lang="less" scoped>
	section {
	    height: 100%;
	    .swiper-container {
	    	margin-top: 80px;
	    }
	    .info-name {
	        box-sizing: border-box;
	        width: 100%;
	        height: 61px;
	        padding-top: 8px;
	        padding-left: 8px;
	        border-bottom: 1px solid #ddd;
	        .name {
	        	    width: 100%;
	        	    height: 24px;
	        	    line-height: 24px;
	        	    color: #444;
	        	    font-size: 18px;
	        	}
	        .description {
	        	    width: 100%;
	        	    height: 20px;
	        	    line-height: 20px;
	        	    color: #888;
	        	    font-size: 14px;
	        	}
	    }
	    .info-price {
	        box-sizing: border-box;
	        width: 100%;
	        height: 61px;
	        padding-top: 8px;
	        padding-left: 8px;
	        border-bottom: 1px solid #ddd;
	        .price {
	        	    width: 100%;
	        	    height: 24px;
	        	    line-height: 24px;
	        	    color: #e3007f;
	        	    font-size: 24px;
	        	    font-weight: bolder;
	        	}
	        .other {
	        	    display: -webkit-box;
	        	    display: -webkit-flex;
	        	    display: flex;
	        	    -webkit-box-orient: horizontal;
	        	    -webkit-flex-flow: row;
	        	    flex-flow: row;
	        	    width: 100%;
	        	    height: 20px;
	        	    div {
	        	    	    width: 100%;
	        	    	    height: 20px;
	        	    	    -webkit-box-flex: 1;
	        	    	    -webkit-flex: 1;
	        	    	    flex: 1;
	        	    	    line-height: 20px;
	        	    	    font-size: 14px;
	        	    	    color: #888;
	        	    	}
	        	    .origin-price {
	        	    	    box-sizing: border-box;
	        	    	    padding-left: 8px;
	        	    	    text-align: left;
	        	    	}
	        	    .unit {
	        	    	    box-sizing: border-box;
	        	    	    text-align: center;
	        	    	}
	        	    .place {
	        	    	    box-sizing: border-box;
	        	    	    padding-right: 16px;
	        	    	    text-align: right;
	        	    	}
	        	}
	    }
	    .info-discount {
	        box-sizing: border-box;
	        width: 100%;
	        height: 34px;
	        border-bottom: 1px solid #ddd;
	        .name {
	        	    display: inline-block;
	        	    width: auto;
	        	    height: 15px;
	        	    margin-top: 8px;
	        	    margin-left: 8px;
	        	    color: #444;
	        	}
	        .value {
	        	    display: inline-block;
	        	    width: auto;
	        	    height: 15px;
	        	    line-height: 15px;
	        	    margin-top: 3px;
	        	    padding: 4px;
	        	    border-radius: 15px;
	        	    box-shadow: 0 1px 1px 1px #eee;
	        	    color: #fff;
	        	    background-color: #e3007f;
	        	}
	    }
	    .push {
	        position: relative;
	        box-sizing: border-box;
	        padding-top: 8px;
	        width: 100%;
	        height: 60px;
	        text-align: center;
	        color: #888;
	        font-size: 12px;
	        .top {
	        	    height: 24px;
	        	    line-height: 24px;
	        	}
	        .bottom {
	        	    height: 20px;
	        	    line-height: 20px;
	        	}
	    }
	}
	.cart-control {
		height: 30px;
		height: 30px;
	}
	img[lazy=loading] {
	  width: 40px;
	  height: 300px;
	  margin: auto;
	}
</style>