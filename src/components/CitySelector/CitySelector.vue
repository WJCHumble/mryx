<template>
		<div>
			<div class="out-box" v-show="toggle">
				<header>
				    <div class="title">选择所需服务的地区</div>
				</header>
				<div class="wrapper" ref="wrapper">
					<ul class="content">
					    <li v-for="(country, index) in supportArea" :key="index" @click.prevent="setSelected(index)">
					        {{country.name}}
					    </li>
					</ul>
				</div>
			</div>
			
		</div>
</template>

<script>
	import {mapState} from 'vuex'
	import BScroll from 'better-scroll'
	export default {
		props:['toggle'],
		mounted() {
			this.$store.dispatch('getSupportArea')
			this.$nextTick(() => {
				if(!this.scroll) {
					this.scroll = new BScroll(this.$refs.wrapper, {
						click: true,
						// stopPropagation: true
						preventDefault: true,
						mouseWheel: true,
						// tap: true,
					})
				} else {
					this.scroll.refresh()
					// console.log(111)
				}
			})
		},
		updated() {
			this.scroll.refresh()
			// console.log(222)
		},
		computed: {
			...mapState(['supportArea'])	
		},
		
		methods: {
			setSelected(index) {
				// console.log(this.supportArea[index])
			    this.$store.dispatch('setCurrentCity', index)
			    // console.log(this.$)
			}
		}
	}
</script>

<style lang="less" scoped>
	.out-box{
		// display: none;
	    height: 320px;
	    width: 240px;
	    background-color: rgba(0,0,0,0.7);
	    border-radius: 10px;
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    margin-left: -120px;
	    margin-top: -160px;
	    z-index: 55;
	    header {
	        width: 100%;
	        height: 44px;
	        .title {
	        	    box-sizing: border-box;
	        	    width: auto;
	        	    height: 100%;
	        	    margin: 0 32px;
	        	    padding-top: 14px;
	        	    padding-bottom: 14px;
	        	    border-bottom: 2px solid #c8026f;
	        	    color: #fff;
	        	    font-size: 14px;
	        	    text-align: center;
	        	}
	    }
	    .wrapper {
	        width: 100%;
	        height: 275px;
			overflow: hidden;
	        .content {
	        	li {
	        	    width: 100%;
	        	    height: 55px;
	        	    line-height: 55px;
	        	    text-align: center;
	        	    font-size: 20px;
	        	    color: #fff;
	        	}
	        }
	    }
	}	
</style>