<template>
	<div>
		<section @click="$router.push('/shopcart')">
	        <span class="prefix">￥</span>
	        <span id="count" class="count">{{totalPrice || 0}}</span>
	        <span id="amount" class="amount" v-if="totalCount">{{totalCount}}</span>
		 </section>
	</div>
</template>

<script>
    import {mapState} from 'vuex'
	export default {
        computed: {
            ...mapState(['totalCount', 'totalPrice'])
        }
    }
</script>

<style lang="less" scoped>
	section {
		position: fixed;
		top: 588px;
        display: inline-block;
        box-sizing: border-box;
        padding: 4px;
        width: auto;
        height: 33px;
        min-width: 35px;
        line-height: 25px;
        color: #fff;
        font-size: 12px;
        background-image: url(./image/minicart.png);
        background-repeat: no-repeat;
        background-size: auto 33px;
        background-position: right center;
        .amount {
            // display: none;
            box-sizing: border-box;
            padding-left: 4px;
            padding-right: 4px;
            width: auto;
            min-width: 25px;
            height: 25px;
            border-radius: 13px;
            background-color: #fff;
            text-align: center;
            color: #e3007f;
        }
    }
</style>