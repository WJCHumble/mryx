<template>
	<div>
		<footer id="footer">
		    <div class="control" v-if="$route.path===`/fooddetail/${$route.params.type}/${$route.params.index}`||$route.path==='/shopcart'">
				<slot name="control"></slot>	    	
		    </div>
		    <div class="panel">
		        <div class="info">
		            <div class="top">总金额:<span id="amount" class="amount">￥{{$route.path===`/fooddetail/${$route.params.type}/${$route.params.index}`?food.totalPrice:totalPrice}}</span></div>
		            <div class="bottom">不含运费</div>
		        </div>
		    </div>
		    <div class="buy">
		        <img class="buy-button" src="./image/buy.png">
		    </div>
		</footer>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		props: {
			food: {
				typed: Object,
				default: 0
			}
			
		},
		computed: {
			...mapState(['totalCount', 'totalPrice'])
		},
	}
</script>

<style lang="less" scoped>
	footer {
	    width: 100%;
	    height: 50px;
	    z-index: 40;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-orient: horizontal;
	    -webkit-flex-flow: row;
	    position: fixed;
	    // padding-bottom: 2px;
	    bottom: 0px;
	    flex-flow: row;
	    background-color: #fff;
	    border-top: 1px solid #d1d1d1;
	    .panel {
	        -webkit-box-flex: 1;
	        -webkit-flex: 1;
	        flex: 1;
	        // width: 100px;
	        height: 50px;
	        .info {
	        	    box-sizing: border-box;
	        	    // width: 100px;
	        	    width: 100%;
	        	    height: 50px;
	        	    padding-top: 8px;
	        	    padding-right: 8px;
	        	    .top {
	        	    	    position: relative;
	        	    	    width: 100%;
	        	    	    height: 20px;
	        	    	    text-align: right;
	        	    	    font-size: 16px;
	        	    	    color: #444;
	        	    	    line-height: 20px;
	        	    	    .amount {
	        	    	    	    font-weight: bold;
	        	    	    	    color: #e3007f;
	        	    	    	}
	        	    	}
	        	    .bottom {
	        	    	    position: relative;
	        	    	    height: 14px;
	        	    	    font-size: 10px;
	        	    	    color: #888;
	        	    	    text-align: right;
	        	    	    line-height: 14px;
	        	    	}
	        	}
	    }

	    .buy {
	        width: 112px;
	        height: 50px;
	        .buy-button {
	        	    width: 112px;
	        	    height: 40px;
	        	    margin-top: 5px;
	        	}
	    }
	}
	
	
	.highlight {
	    opacity: 0.7;
	}	
</style>