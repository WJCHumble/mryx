<template>
	<div>
		<mt-navbar  v-model="selectedIndex" :style="{height: navStyleObj.height, background: navStyleObj.background, top: top?'190px':'50px'}" >
			<mt-tab-item 
			v-for="(tab, index) in tabs" 
			:key="index" 
			:id="index" 
			:class="{selected:index==selectedIndex}" 
			:style="{borderBottomWidth:navStyleObj.fontSize?'0px':'2px'}"
			> 
				<span 
				:style="{color: index==selectedIndex?itemStyleObj.activeColor:'pink',
						fontSize: navStyleObj.fontSize, 
						fontWeight: index==selectedIndex?'bold':'normal'}"
				@click.stop="updateSelectedIndex(index)"
				class="subTab" 
				>
					<i class="iconfont" :class="tab.icon?tab.icon:''"></i>
					{{tab.name}}
				</span>
			</mt-tab-item>
		</mt-navbar>
	</div>
</template>

<script>
	import {Indicator} from 'mint-ui'
	import {mapState} from 'vuex'
	export default {
		mounted() {
			this.$store.dispatch('updateSelectedIndex', 0)
			this.selectedIndex = this.$store.state.selectedIndex
		},
		props: {
			tabs: Array,	
			navStyleObj: {
				typed: Object,
				default: function() {
					return {
							height: '45px',
							background: '#fff'
						}
				}
			},
			itemStyleObj: {
				typed: Object,
				default: function() {
					return {
						activeColor: '#E1017E',
					}
				}
			},
			top: {
				typed: Boolean,
				default: false
			}
		},
		data() {
			return {
				selectedIndex: '0',
				fixedBoolean: true,
			}
		},
		computed: {
			...mapState(['foodType']),
		},
		methods: {
			updateSelectedIndex(index) {
				this.$store.dispatch('updateSelectedIndex', index)
				this.selectedIndex = this.$store.state.selectedIndex
				let currentFoodType = this.foodType[index]
				if(this.$route.path === '/home' && !this.$store.state[currentFoodType].length) {
					this.$store.dispatch('getFoods', {foodIndex: index})
					Indicator.open()
					this.$store.state.Indicator = Indicator
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	.mint-navbar {
		// position: relative;
		position: fixed;
		// top:50px;
		// height: 45px;
		z-index:5;
		.mint-tab-item.is-selected {
			border-bottom: 2px solid #E1017E;
			color: #E1017E;
		}
		.mint-tab-item {
			padding-top: 12px;
			padding-bottom: 12px;
			font-weight: bolder;
		}
		.is-selected {
			color: #fff;
		}
	}
	span {
		font-size: 15px;
		color: #fff;
		// width: 75.037px!important;
		padding-left: 24.0235px;
		padding-right: 24.0235px;
		i {
			font-size: 20px;
			margin-right: 12px;
		}
	}
	.selected{
		border-bottom: 2px solid #E1017E;
	}
</style>