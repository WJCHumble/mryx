<template>
	<div>
		<v-touch @swipeleft="swipeLfet" @swiperight="swipeRight">
			<mt-tab-container ref="container" v-model="selectedIndex" :swipeable="swipeable">
			  <mt-tab-container-item v-for="(type, index_) in foodType" :id="tabContainer[index_]" :key="index_">
		  		<Food v-for="(food, index) in $store.state[type]" :key="index" :food="food" @click.native="$router.push(`/fooddetail/${type}/${index}`)">
		  	    </Food>
			  </mt-tab-container-item>
			  <!-- <mt-tab-container-item  id="tab-container2">
				<Food v-for="(fruit, index) in fruits" :key="index" :food="fruit" @click.native="$router.push(`/fooddetail/${index}`)">
			    </Food>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container3">
				<Food v-for="(fruit, index) in fruits" :key="index" :food="fruit" @click.native="$router.push(`/fooddetail/${index}`)">
		  	    </Food>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container4">
		    	<Food v-for="(fruit, index) in fruits" :key="index" :food="fruit" @click.native="$router.push(`/fooddetail/${index}`)">
		        </Food>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container5">
		    	<Food v-for="(fruit, index) in fruits" :key="index" :food="fruit" @click.native="$router.push(`/fooddetail/${index}`)">
		        </Food>
			  </mt-tab-container-item> -->
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
			if(this.fruits.length === 0) {
				this.$store.dispatch('getFoods', {foodIndex: 0})
			}		
		},
		data() {
			return {
				swipeable: true,
				currentIndex:  0,
				swipIndex: 0,
				tabContainer: [
					'tab-container1',
					'tab-container2',
					'tab-container3',
					'tab-container4',
					'tab-container5',
				]
				// foods: this.$store.state.foods[0]
			}
		},
		computed: {
			...mapState(['food', 'fruits', 'foodType']),
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
				// this.$store.dispatch('updateSelectedIndex', 1)
				this.$emit('v-swipeLeft')
			},
			swipeRight() {
				// {swipIndex}
				this.$emit('v-swipeRight')
			},
		}
	}
</script>

<style lang="less" scoped>
</style>