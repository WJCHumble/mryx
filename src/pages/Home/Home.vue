<template>
	<div>
		<div>
			<HeaderTop :rightIcon="rightIcon" @toggleCitySelector="toggleCitySelector()" :toggle="toggle"/>
		</div>
		<!-- tab切换 -->
		<NavBar ref="nav" :tabs="tabs" :navStyleObj="navStyleObj" :itemStyleObj="itemStyleObj"/>
		<!-- 内容 -->
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<!-- 轮播 -->
				<!-- <div style="height:72px"></div> -->
				<div class="swiper-box" v-show="selectedIndex == 0">
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<img src="./image/banner1.png">
							</div>
					        <div class="swiper-slide">
								<img src="./image/banner2.png">
					        </div>
					        <!-- 如果需要分页器 -->
						</div>
			            <div class="swiper-pagination"></div>
					</div>
				</div>
				<!-- 内容 -->
				<!-- 使用better-scroll进行加载 -->
				<FoodList @v-swipeLeft="swipeLeft" @v-swipeRight="swipeRight"/>
				<br><br><br><br><br><br>
				<br>
		    </div>
		    <MiniCart/>
		</div>
		<!-- 选择城市模态框 -->
		<div class="v-modal" style="z-index: 20;background:rgba(0, 0, 0, 0);touch-action:none"  v-show="toggle" @click.stop="toggle=!toggle"></div>
		<CitySelector :toggle.sync="toggle"/>
	</div>
</template>

<script>
	import {mapState} from "vuex"
	import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
	import Food from '../../components/Food/Food.vue'
	import CitySelector from '../../components/CitySelector/CitySelector.vue'
	import NavBar from '../../components/NavBar/NavBar.vue'
	import MiniCart from '../../components/MiniCart/MiniCart.vue'
	import FoodList from '../../components/FoodList/FoodList.vue'
	import {Indicator} from 'mint-ui'
	//使用swiper  
	//引用swiper
	import Swiper from 'swiper' 
	//引入css文件
	import 'swiper/dist/css/swiper.min.css'
	//引入Better-scroll
	import  BScroll from 'better-scroll'

	export default {
		data() {
			return {
				toggle: false,
				rightIcon: require('./image/membercenter.png'),
				swperIndex: 0,
				tabs: [{name:'水果'},  {name:'食材'}, {name:'零食'}, {name:'牛奶'}, {name:'蔬菜'}],
				navStyleObj: {
					 height: '38px',
					 fontSize: '13.5px',
					 background: '#E1017E'
				},
				itemStyleObj: {
					color: 'pink',
					activeColor: '#fff',
				},
				// homeScroll: Object,
			}
		},
		computed: {
			...mapState(['selectedIndex', 'fruits'])
		},
		components: {
			HeaderTop,
			NavBar,
			Food,
			CitySelector,
			MiniCart,
			FoodList,
		},
		watch: {
			fruits: function () {
				// Indicator.close()
			}
		},
		beforeCreate() {
			//在显示页面前加载提示框
			// Indicator.open()
			Indicator.open()
			this.$store.state.Indicator = Indicator
			// console.log(this);
		},
		updated() {
			    // console.log(1111)
				this.$nextTick(() => {
			    	this._swiperInit()
			    	// this._initScroll()
			    	this.homeScroll.refresh()
			    })
			    // console.log(333)
			    // console.log(111)
		},
		mounted() {
			    this.$nextTick(() => {
			    	this._swiperInit()
			    	this._initScroll()
			    	// Indicator.close()
			    	// console.log(111)
			    })
			    
		},
		methods: {
			toggleCitySelector() {
				// e.stopPropagation()
				// console.log(e)
				// event.stopPropagation()
				this.toggle = !this.toggle
			},
			//设置单击整个除城市选择之外隐藏它
			hiddenCitySelector() {
				this.toggle = false
			},
			swipeLeft() {
				// console.log(this.$refs.nav);
				if(this.swperIndex === 4) {
					return
				} else {
					this.swperIndex++
					this.$refs.nav.updateSelectedIndex(this.swperIndex);
					this._swiperInit()
				}
			},
			swipeRight() {
				// console.log()
				if(this.swperIndex === 0) {
					return
				} else {
					this.swperIndex--
					this.$refs.nav.updateSelectedIndex(this.swperIndex);
					this._swiperInit()
				}
			},
			_swiperInit() {
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
			_initScroll() {
				this.homeScroll = new BScroll('.wrapper', {
					click: true,
					// click: true,
					tap: true,
			    })
			},
		}
	}
</script>

<style lang="less" scoped>	
	.wrapper {
		margin-top: 88px;
		width: 100%;
		height: 680px;
		.content {
			width: 100%;
			// 轮播
			// overflow-y: ;
			.swiper-box {
				// padding-top: 28PX;
				width: 100%;
				height: 100px;
				// padding: 5px 7px;
				// padding-right: 20px;
				
				.swiper-container {
					width: 100%;
					height: 100px;
					box-sizing: border-box;
					.swiper-slide {
						img {
							width: 100%;
							height: 100%;
						}
					}
				}	
			}
		}
	}
</style>