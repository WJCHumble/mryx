<template>
	<div>
		<v-touch @swipeleft="swipeLfet" @swiperight="swipeRight">
			<mt-tab-container ref="container" v-model="selectedIndex" :swipeable="swipeable">
			  <mt-tab-container-item v-for="(type, index_) in foodType" :id="tabContainer[index_]" :key="index_">
		  		<Food v-for="(food, index) in $store.state[type]" :key="index" :food="food" @click.native="$router.push(`/fooddetail/${type}/${index}`)">
		  	    </Food>
			  </mt-tab-container-item>
			</mt-tab-container>
		</v-touch>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import Food from '../Food/Food.vue'
	import {Indicator} from 'mint-ui'
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
		updated() {
			this.Indicator.close()
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
			}
		},
		computed: {
			...mapState(['food', 'fruits', 'foodType', 'Indicator']),
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
				this.$emit('v-swipeLeft')
			},
			swipeRight() {
				this.$emit('v-swipeRight')
			},
		}
	}
</script>

<style lang="less" scoped>
</style>