<template>
	<div>
		<div 
		class="control" 
		:class="{fooddetail: $route.path===`/fooddetail/${$route.params.type}/${$route.params.index}`}"
		>
		    <transition-group name=""
			enter-active-class="animated fadeIn"
			leave-active-class="animated fadeOut"
		    >
		    	<div class="panel" v-if="food.count" key="1">
	    	    	<img 
	    	    	class="minus" 
	    	    	src="./image/minus.png" 
	    	    	:style="{top: $route.path=='/home'?'-50px':'-60px'}" 
	    	    	@click.stop.prevent="updateFoodCount(false)">
		    	    <div 
		    	    class="count" 
		    	    :style="{top: $route.path=='/home'?'-50px':'-60px'}">{{food.count}}</div>
		    	</div>
		    </transition-group>
	    	<img 
	    	class="add" 
	    	src="./image/add.png" 
	    	:style="{top: $route.path=='/home'?'-50px':'-60px'}" 
	    	@click.stop="updateFoodCount(true)" ref="img">
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				// isActive: true
				styleObj: {
					bottom: '-46px',
					left: '16px',
					top: '72px'
				}
			}
		},
		props: {
			food: {
				typed: Object,
				default: function () {
					return {}
				}
			}
		},
		computed: {
			...mapState(['cartFoods', 'tempCartFoods']),
		},
		methods: {
			updateFoodCount(isAdd) {
				    // console.log(e._constructed)
				    // if(!e._constructed) {
				    // 	return
				    // }
				    // this.$refs.img.addEventListener('tap', function(){
				    // 	console.log(111)
				    // }, false)
					this.$store.dispatch('updateFoodCount', {food: this.food, isAdd: isAdd})
			}
		}
	}
</script>

<style lang="less" scoped>
	.control {
		    bottom: 8px;
		    top: 148px;
			position: absolute;
			width: 110px;
			height: 23px;
			right: 8px;
			z-index: 5;
		    .panel {
		    	    // display: none;
		    	    height: 23px;
		    	    .minus {
		    	    	    position: absolute;
		    	    	    top: -60px;
		    	    	    left: 0;
		    	    	    width: 23px;
		    	    	    height: 23px;
		    	    	}
		    	    .count {
		    	    	    position: relative;
		    	    	    top: -60px;
		    	    	    margin-left: 31px;
		    	    	    margin-right: 31px;
		    	    	    width: auto;
		    	    	    height: 23px;
		    	    	    text-align: center;
		    	    	    line-height: 23px;
		    	    	    color: #444;
		    	    	    font-size: 12px;
		    	    	    background-image: url(./image/count.png);
		    	    	    background-repeat: no-repeat;
		    	    	    background-size: 48px 23px;
		    	    	}
		    	}
		    
		    .add {
		    	    position: absolute;
		    	    top: -60px;
		    	    right: 0;
		    	    width: 23px;
		    	    height: 23px;
		    	}
		}
		.fooddetail {
			top: 72px;
		    bottom: -46px;
			left: 16px;
		}
</style>