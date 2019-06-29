<template>
	<div>
		<footer id="footer">
		    <div class="item">
		        <div class="button setting" @click="$router.push('/setting')">设置</div>
		    </div>
		    <div class="item">
		        <div class="button message">消息</div>
		    </div>
		    <div class="item"></div>
		    <div class="item item-service" @click="showDialog">
		        <div class="button service">客服</div>
		    </div>
		</footer>
	</div>
</template>

<script>
	import {MessageBox} from 'mint-ui'
	export default {
		methods: {
			showDialog () {
				MessageBox({
				  title: '提示',
				  message: '您将拨打电话：555555',
				  showCancelButton: true
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	footer {
	    display: -webkit-box;   
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-orient: horizontal;  //水平排列div的子元素
	    -webkit-flex-flow: row;
	    flex-flow: row;
	    position: fixed;
	    bottom: 0px;
	    width: 100%;
	    height: 50px;
	    .item {
	    	    -webkit-box-flex: 1;
	    	    -webkit-flex: 1;
	    	    flex: 1;
	    	    width: 100%;
	    	    height: 50px;
	    	    .button {
	    	    	    display: inline-block;
	    	    	    width: auto;
	    	    	    height: 50px;
	    	    	    box-sizing: border-box;
	    	    	    line-height: 50px;
	    	    	    text-align: left;
	    	    	    font-size: 16px;
	    	    	    background-size: auto 16px;
	    	    	    background-position: 16px center;
	    	    	    background-repeat: no-repeat;
	    	    	}
	    	}
	    .item-service {
	    	    text-align: right;
	    	}
	}
	.setting {
	    padding-left: 34px;
	    background-image: url(./image/user_setting.png);
	}
	
	.message {
	    padding-left: 44px;
	    background-image: url(./image/icon_user_messages.png);
	}
	
	.service {
	    padding-left: 34px;
	    padding-right: 16px;
	    background-image: url(./image/user_call.png);
	}	
</style>