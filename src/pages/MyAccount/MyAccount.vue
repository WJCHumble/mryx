<template>
	<div>
		<HeaderTop :rightIcon="rightIcon"/>
		<div class="top-content">
			<div class="account-name">优鲜余额</div>
			<div class="account-num">￥0&nbsp;</div>
		</div>
		<NavBar :tabs="tabs" :top="top"/>
	</div>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import NavBar from '../../components/NavBar/NavBar.vue'
	export default {
		data() {
			return {
				rightIcon: require('./image/accounthelp.png'),
				tabs: [{name:'充值有礼', icon:'icon-qianbao'}, {name:'卡劵兑换', icon:'icon-kaquan'}, {name:'账单记录', icon:'icon-zhangdan'}],
				top: true,
			}	
		},
		components: {
			HeaderTop,
			NavBar
		}
	}
</script>

<style lang="less" scoped>
	.top-content {
		width: 100%;
		height: 140px;
		background: #e1017e;
		position: relative;
		top: 49px;
		.account-name {
	        position: relative;
	        top: 20px;
	        width: 100%;
	        height: 40px;
	        color: #fff;
	        line-height: 40px;
	        font-size: 14px;
	        text-align: center;
	    }
	    .account-num {
	        position: relative;
	        top: 20px;
	        width: 100%;
	        height: 40px;
	        color: #fff;
	        line-height: 40px;
	        font-size: 24px;
	        font-weight: bolder;
	        text-align: center;
	    }
	}	
	// .mint-navbar {
	// 	top: 190px;
	// }
</style>