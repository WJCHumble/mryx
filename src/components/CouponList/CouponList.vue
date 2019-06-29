<template>
	<div>
		<section id="list">
		    <div class="coupon">
		        <div class="title">优惠卷</div>
		        <div class="price">50.0<sup>￥</sup></div>
		        <div class="info">
		            <div class="top">APP新客户50元体验卷</div>
		            <div class="middle">满99元使用（含运费）</div>
		            <div class="bottom">有效期至2016年10月1日</div>
		        </div>
		    </div>
		    <div class="coupon">
		        <div class="title">优惠卷</div>
		        <div class="price">30.0<sup>￥</sup></div>
		        <div class="info">
		            <div class="top">APP新客户30元体验卷</div>
		            <div class="middle">满99元使用（含运费）</div>
		            <div class="bottom">有效期至2016年10月1日</div>
		        </div>
		    </div>
		</section>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="less" scoped>
	@position: relative;
	@tranformParam: left top;
	@text-align: center;

	section {
	    position: @position;
	    box-sizing: border-box;
	    padding: 8px 16px;
	    padding-left: 0px;
	    width: 722px;
	    height: auto;
	    top: 41px;
	    transform-origin: @tranformParam;
	    -webkit-transform-origin: @tranformParam;
	    .coupon {
	    	    position: @position;
	    	    margin-top: 16px;
	    	    margin-bottom: 16px;
	    	    width: 497px;
	    	    left: -57px;
	    	    height: 105px;
	    	    background-image: url(./image/coupon_background.png);
	    	    background-repeat: no-repeat;
	    	    background-position: @text-align @text-align;
	    	    background-size: 352px 105px;
	    	     .title {
	    	    	    position: absolute;
	    	    	    width: 96px;
	    	    	    height: 20px;
	    	    	    // top: 5px;
	    	    	    right: 272;
	    	    	    left: 90px;
	    	    	    font-size: 13px;
	    	    	    text-align: @text-align;
	    	    	    color: #e3007f;
	    	    	    // color: #000;
	    	    	    // z-index: 55;
	    	    	    line-height: 20px;
	    	    	    transform: rotate(90deg);
	    	    	    -webkit-transform: rotate(90deg);
	    	    	    transform-origin: @tranformParam;
	    	    	    -webkit-transform-origin: @tranformParam;
	    	    	}
	    	    .price {
	    	    	    position: absolute;
	    	    	    box-sizing: border-box;
	    	    	    width: 66px;
	    	    	    // height: 190px;
	    	    	    left: 115px;
	    	    	    // padding-top: 55px;
	    	    	    top: 41px;

	    	    	    font-size: 24px;
	    	    	    color: #fff;
	    	    	    font-weight: bolder;
	    	    	    text-align: @text-align;
	    	    	    sup {
	    	    	    	    display: inline;
	    	    	    	    font-size: 24px;
	    	    	    }
	    	    	    	
	    	    	}
	    	    .info {
	    	    	    position: @position;
	    	    	    box-sizing: border-box;
	    	    	    // padding-left: 16px;
	    	    	    left: 152px;
	    	    	    width: 300px;
	    	    	    // height: 190px;
	    	    	    // right: 0;
	    	    	    color: #fff;
	    	    	    .top {
	    	    	    	    position: relative;
	    	    	    	    // margin-top: 30px;
	    	    	    	    height: 32px;
	    	    	    	    line-height: 40px;
	    	    	    	    font-size: 15px;
	    	    	    	    left: 82px;
	    	    	    	    font-weight: bolder;
	    	    	    	}
	    	    	    .middle {
	    	    	    	    position:  @position;
	    	    	    	    // margin-top: 4px;
								left: 76px;
	    	    	    	    height: 32px;
	    	    	    	    line-height: 40px;
	    	    	    	    font-size: 20px;
	    	    	    	}
	    	    	    .bottom {
	    	    	    	    position: @position;
	    	    	    	    // margin-top: 16px;
	    	    	    	    left: 79px;
	    	    	    	    height: 32px;
	    	    	    	    line-height: 40px;
	    	    	    	    font-size: 15px;
	    	    	    	}
	    	    	}
	    	}
	}	
</style>