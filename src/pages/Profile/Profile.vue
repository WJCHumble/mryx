<template>
	<div>
		<HeaderTop/>
		<div class="top-content">
		    <div class="icon-panel">
		        <div id="icon" class="icon"></div>
		    </div>
		    <div id="username" class="username">stunning</div>
		    <div class="account-info">积分：0&nbsp;|&nbsp;余额：￥0</div>
		</div>
		<section>
		    <div class="option" @click="$router.push('/myorder')">
		        <div class="icon icon-myorder"></div>
		        <div class="title">我的订单</div>
		        <div class="arrow-panel">
		            <div class="text">查看所有订单详情</div>
		        </div>
		    </div>
		    <div class="option" @click="$router.push('/myaccount')">
		        <div class="icon icon-account"></div>
		        <div class="title">我的账户</div>
		        <div class="arrow-panel">
		            <div class="text">充值有礼</div>
		        </div>
		    </div>
		    <div class="option" @click="$router.push('/mycoupon')">
		        <div class="icon icon-coupon"></div>
		        <div class="title">优惠卷</div>
		        <div class="arrow-panel">
		            <div class="text">查看我的优惠卷</div>
		        </div>
		    </div>
		    <div class="option" @click="$router.push('/myaddress')">
		        <div class="icon icon-address"></div>
		        <div class="title">收货地址</div>
		        <div class="arrow-panel">
		            <div class="text">管理我的收货地址</div>
		        </div>
		    </div>
		</section>
		<FooterSet/>
	</div>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import FooterSet from '../../components/FooterSet/FooterSet.vue'
	export default {
		components: {
			HeaderTop,
			FooterSet
		}
	}
</script>

<style lang="less" scoped>
	.top-content {
	    height: 150px;
	    padding-top: 50px;
	    background-color: #e3007f;
	    .icon-panel {
	    	    width: 100%;
	    	    height: 86px;
	    	    text-align: center;
	    	    .icon {
	    	    	    display: inline-block;
	    	    	    box-sizing: border-box;
	    	    	    width: 86px;
	    	    	    height: 84px;
	    	    	    border: 3px solid #b10063;
	    	    	    border-radius: 80px;
	    	    	    background-repeat: no-repeat;
	    	    	    background-image: url(./image/default_square.jpg);
	    	    	    background-size: 100% 100%;
	    	    	    background-position: center center;
	    	    	}
	    	}
	    .username {
	    	    height: 30px;
	    	    line-height: 30px;
	    	    font-size: 14px;
	    	    color: #fff;
	    	    text-align: center;
	    	}
    	.account-info {
    	        height: 30px;
    	        line-height: 30px;
    	        font-size: 12px;
    	        color: #fff;
    	        text-align: center;
    	    }
	}
	.option {
	    position: relative;
	    box-sizing: border-box;
	    width: 100%;
	    height: 61px;
	    border-bottom: 1px solid #ddd;
	    .icon {
	    	    position: absolute;
	    	    left: 0;
	    	    top: 0;
	    	    width: 40px;
	    	    height: 60px;
	    	    background-repeat: no-repeat;
	    	    background-position: 12px center;
	    	    background-size: auto 20px;
	    	}
	    .icon-myorder {
	    	    background-image: url(./image/img_item_myorder.png);
	    	}
	    .icon-account {
	    	    background-image: url(./image/icon_user_info_accounts.png);
	    	}
	    .icon-coupon {
	    	    background-image: url(./image/icon_user_coupon.png);
	    	    background-position: 8px center;
	    	}
	    .icon-address {
	    	    background-image: url(./image/item_user_address.png);
	    	}
	    .title {
	    	    position: relative;
	    	    box-sizing: border-box;
	    	    width: 100%;
	    	    height: 60px;
	    	    padding-left: 40px;
	    	    font-size: 14px;
	    	    color: #444;
	    	    text-align: left;
	    	    line-height: 60px;
	    	}
	    .arrow-panel {
	    	    position: absolute;
	    	    top: 0;
	    	    right: 12px;
	    	    width: auto;
	    	    height: 60px;
	    	    background-image: url(./image/arrow_right.png);
	    	    background-repeat: no-repeat;
	    	    background-size: 16px 24px;
	    	    background-position: right center;
	    	}
	    .arrow-panel .text {
	    	    box-sizing: border-box;
	    	    padding-right: 20px;
	    	    width: auto;
	    	    height: 60px;
	    	    line-height: 60px;
	    	    font-size: 13px;
	    	    color: #888;
	    	    text-align: left;
	    	}
	}
	.highlight {
	    opacity: 0.7;
	}	
</style>