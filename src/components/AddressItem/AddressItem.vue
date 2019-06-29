<template>
	<div>
		<section id="list" class="list" v-if="myAddress[0]">
		    <div class="address" v-for="(vo, index) in myAddress" :key="index">
		        <div class="icon"></div>
		        <div class="sign" v-if="vo.default_">[默认]</div>
		        <div class="info">
		            <div class="top">
		                <div class="consignee">收货人：{{vo.name}}</div>
		                <div class="mobile">{{vo.tel}}</div>
		            </div>
		            <div class="bottom">
		                <div class="type">[{{vo.type}}]</div>
		                <div class="text">{{vo.locationArea}}</div>
		            </div>
		        </div>
		        <div class="arrow" @click="$router.push(`/myaddress/updateaddress/${index}`)"></div>
		    </div>
		</section>
		<section id="empty" class="empty" v-else></section>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		computed: {
			...mapState(['myAddress'])
		}
	}
</script>

<style lang="less" scoped>
	.list {
	    /*display: none;*/
	    width: 100%;
	    height: auto;
	    position: absolute;
	    top: 50px;
	    border-bottom: 1px solid #eee;
	    .address {
	    	    box-sizing: border-box;
	    	    width: 100%;
	    	    height: 100px;
	    	    border-bottom: 1px solid #ccc;	
	    	    // margin-bottom: 1px;
	    	    position: relative;
	    	    padding: 16px 16px;
	    	    background-color: #fff;
	    	    .icon {
	    	    	    position: absolute;
	    	    	    top: 21px;
	    	    	    left: 16px;
	    	    	    width: 19px;
	    	    	    height: 24px;
	    	    	    background-image: url(./image/icon_address.png);
	    	    	    background-repeat: no-repeat;
	    	    	    background-size: auto 20px;
	    	    	    background-position: center center;
	    	    	}
	    	    .sign {
	    	    	    // display: block;
	    	    	    position: absolute;
	    	    	    top: 45px;
	    	    	    left: 8px;
	    	    	    width: 35px;
	    	    	    height: 14px;
	    	    	    line-height: 14px;
	    	    	    font-size: 12px;
	    	    	    color: #444;
	    	    	    text-align: center;
	    	    	}
	    	    .sign-1 {
	    	    	    display: block;
	    	    	}
	    	    .info {
	    	    	    position: relative;
	    	    	    box-sizing: border-box;
	    	    	    padding-left: 36px;
	    	    	    padding-right: 28px;
	    	    	    width: 100%;
	    	    	    height: auto;
	    	    	    .top {
	    	    	    	    position: relative;
	    	    	    	    box-sizing: border-box;
	    	    	    	    width: 100%;
	    	    	    	    height: 32px;
	    	    	    	    color: #444;
	    	    	    	    line-height: 32px;
	    	    	    	    font-size: 14px;
	    	    	    	    .consignee {
	    	    	    	    	    display: inline;
	    	    	    	    	    width: auto;
	    	    	    	    	}
	    	    	    	    .mobile {
	    	    	    	    	    display: inline;
	    	    	    	    	    width: auto;
	    	    	    	    	    margin-left: 16px;
	    	    	    	    	}
	    	    	    	}
	    	    	    .bottom {
	    	    	    	    position: relative;
	    	    	    	    width: 100%;
	    	    	    	    min-height: 32px;
	    	    	    	    line-height: 32px;
	    	    	    	    color: #888;
	    	    	    	    font-size: 14px;
	    	    	    	    .type {
	    	    	    	    	    display: inline;
	    	    	    	    	    width: auto;
	    	    	    	    	    color: #e3007f;
	    	    	    	    	    font-weight: bolder;
	    	    	    	    	}
	    	    	    	    .text {
	    	    	    	    	    display: inline;
	    	    	    	    	    width: auto;
	    	    	    	    	}
	    	    	    	}
	    	    	}
    	    	.arrow {
    	    		    position: absolute;
    	    		    right: 16px;
    	    		    top: 40px;
    	    		    width: 8px;
    	    		    height: 16px;
    	    		    background-image: url(./image/item_user_address_right.png);
    	    		    background-repeat: no-repeat;
    	    		    background-size: 8px 16px;
    	    		    background-position: right center;
    	    		}
	    	}
	}
	
	.empty {
	    display: none;
	    position: absolute;
	    width: 100%;
	    height: 100%;
	    background-color: #fff;
	    background-image: url(./image/address_empty.png);
	    background-repeat: no-repeat;
	    background-size: auto 93px;
	    background-position: center 50px;
	}
	
	.highlight {
	    opacity: 0.7;
	}	
</style>