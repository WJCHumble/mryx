<template>
	<div>
		<v-touch @swipeleft="swipeLfet" @swiperight="swipeRight">
			<mt-tab-container ref="container" v-model="selectedIndex" :swipeable="swipeable">
			  <mt-tab-container-item ref="item" id="tab-container1">
		  		<Food v-for="(food, index) in fruitList" :key="index" :food="food" @click.native="$router.push(`/fooddetail/${index}`)">
		  	    </Food>
			  </mt-tab-container-item>
			  <mt-tab-container-item ref="item2" id="tab-container2">
			    <mt-cell v-for="(n, index) in 5" :key="index" title="tab-container 1"></mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container3">
			    <mt-cell v-for="(n, index) in 6"  :key="index" title="tab-container 1"></mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container4">
			    <mt-cell v-for="(n, index) in 7" :key="index" title="tab-container 1"></mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container5">
			    <mt-cell v-for="(n, index) in 8" :key="index" title="tab-container 1"></mt-cell>
			  </mt-tab-container-item>
			</mt-tab-container>
			</v-touch>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import Food from '../Food/Food.vue'
	//引用swiper
	import Swiper from 'swiper' 
	//引入css文件
	import 'swiper/dist/css/swiper.min.css'
	export default {
		mounted() {
			if(!this.fruitList[0]) {
				this.$store.dispatch('getFruitList', this.currentCity.id)
			}
		},
		data() {
			return {
				// index: 0,
				swipeable: true,
				currentIndex:  0,
				swipIndex: 0,
				// x: this.$refs.container._data.start.x
			}
		},
		computed: {
			...mapState(['food', 'currentCity', 'fruitList']),
			selectedIndex: {
				get() {
					return this.currentIndex = `tab-container${this.$store.state.selectedIndex + 1}`
				},
				set(val) {
					return this.currentIndex = `tab-container${this.$store.state.selectedIndex + 1}`
				}
			},
			
		},
		components: {
			Food,
		},
		methods: {
			swipeLfet() {
				console.log('我向右滑动了')
				// this.$store.state.selectedIndex = 1
				this.$store.dispatch('updateSelectedIndex', 1)
				this.$emit('v-swipeLeft')
			},
			swipeRight() {
				// {swipIndex}
				console.log('我向左滑动了')
				this.$emit('v-swipeRight')
			},
			_initData() {
				
			}
		}
	}
</script>

<style lang="less" scoped>
</style>