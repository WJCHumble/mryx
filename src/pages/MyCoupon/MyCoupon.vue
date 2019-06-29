<template>
	<div>
		<HeaderTop>
			<template v-slot:winName>我的优惠卷</template>
		</HeaderTop>
		<SearchCoupon/>
		<CouponList/>
	</div>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import SearchCoupon from '../../components/SearchCoupon/SearchCoupon.vue'
	import CouponList from '../../components/CouponList/CouponList.vue'

	export default {
		components: {
			HeaderTop,
			SearchCoupon,
			CouponList
		},
		data() {
			return {
				searchContent: ''
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>