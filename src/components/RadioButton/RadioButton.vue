<template>
	<div>
		<div class="select"
		:class="{selectfood: foodType, selectOff: food.status}" ></div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		props: {
			foodType: {
				type: Boolean,
				default: false
			},
			// status: {
			// 	type: Boolean,
			// 	default: false
			// }
			food: {
				type: Object,
				default: function() {
					return {status: false}
				}
			}
		},
		methods: {
			switchStatus() {
			}
		}
	}
</script>

<style lang="less" scoped>
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
	.selectOff {
		background-image: url(./image/select_off.png);
		}
	.selectfood {
		top: 60px;
		left: 10px;
		width: 20px;
		height: 20px;
		z-index: 55;
	}
</style>