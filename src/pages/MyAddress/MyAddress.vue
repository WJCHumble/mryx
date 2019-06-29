<template>
	<div>
		<!-- <HeaderTop :winName="winName"/>	 -->
		<HeaderTop>
			<template v-slot:winName>收获地址</template>
			<template v-slot:address-right>
			    <div class="address-right" v-if="$route.path=='/myaddress'" @click="$router.push('/myaddress/addaddress')">添加</div>
			    <div class="address-right" @click="delAddress" v-if="$route.path==`/myaddress/updateaddress/${$route.params.index}`">
			    	删除
			    </div>
			</template>
		</HeaderTop>
		<!-- <AddressSet/> -->
		<div v-if="$route.path=='/myaddress'">
			<AddressItem/>
		</div>
		<router-view/>
	</div>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import AddressSet from '../../components/AddressSet/AddressSet.vue'
	import AddressItem from '../../components/AddressItem/AddressItem.vue'

	export default {
		components: {
			HeaderTop,
			AddressSet,
			AddressItem,
		},
		methods: {
			delAddress() {
				//根据此时地址栏的addressItem的下标进行删除
				let addressIndex = this.$route.params.index
				// console.log(addressIndex)
				this.$toast({
					message: '删除成功,正在跳转....',
					duration: 1200,
					position: 'bottom'
				})
				this.$store.dispatch('delAddressItem', addressIndex)
				setTimeout(() => {
					this.$router.replace('/myaddress')
				}, 1400)
				//触发action

			}
		}
	}
</script>

<style lang="less" scoped>
	.address-right {
	    	position: absolute;
	        right: 10px;
	        top: 17px;
	    	font-size: 15px;
	    	color: #fff;
	    }	
</style>