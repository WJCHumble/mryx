<template>
	<div>
		<mt-switch v-model="value" class="switch-default" @click.native="switchDefault">设置为默认地址</mt-switch>	
		<mt-field class="cell-size" label="收货人：" placeholder="请输入收货姓名" v-model="addressItem.name"></mt-field>
		<mt-field class="cell-size" label="手机号码：" placeholder="点击输入收货人手机号码" v-model="addressItem.tel"></mt-field>
		<mt-cell title="所在区域：" is-link>
		  <span style="color: #444;margin-left:-228px;" >{{addressItem.locationArea||'点击选择所在区域'}}</span>
		</mt-cell>
		<mt-cell title="具体地址：" is-link>
		  <span style="color: #444;margin-left:-228px;">{{addressItem.detailAddress||'点击选择楼号门牌号'}}</span>
		</mt-cell>
		<mt-field class="cell-size" label="楼号门牌号：" placeholder="点击输入楼号门牌(例A座3单元1201" v-model="addressItem.doorNumber"></mt-field>
		<!-- 地址类型 -->
		<mt-cell title="地址类型：">
			<span v-for="(type, index) in addressTypes" :key="index">
				<mt-button type="default" class="normal" size="small" @click="currentTypeIndex=index" :class="{actived: currentTypeIndex==index}">{{type}}</mt-button>&nbsp;&nbsp;
			</span>
		</mt-cell>
		<br>
		<br>
		<mt-button size="large" class="normal btn-save" @click="save">保存</mt-button>
	</div>
</template>

<script>
	import AddressSet from '../../../components/AddressSet/AddressSet.vue'
	export default {
		data() {
			return {
				value: false,
				currentTypeIndex: 0,
				addressTypes: [
					'公司',
					'住宅',
					'学校',
					'其他'
				],
				addressItem: {
					locationArea: '',
					name: '',
					tel: '',
					detailAddress: '',
					doorNumber: '',
					addressType: ''
				}
			}
		},
		components: {
			AddressSet,
		},
		methods: {
			save() {
				this.$toast({
					message: '添加成功,正在跳转....',
					duration: 1200,
					position: 'bottom'
				})
				//触发添加地址
				this.$store.dispatch('addAddress', {addressItem: this.addressItem})
				setTimeout(() => {
					this.$router.replace('/myaddress')
				}, 1400)
			},
			switchDefault() {
				this.value = !this.value
				this.addressItem.default_ = this.value
			}
		}
	}
</script>

<style lang="less" scoped>
	.switch-default {
		padding-top: 60px;
		padding-left: 10px;
		padding-bottom: 12px;
		font-size: 18px;
		color: #444;
	}
	.btn-default (@bgColor: #fff, @borderColor: #eee, @textColor: #656b79) {
		background: @bgColor;
		border-radius: 16px;
		border: 1px solid @borderColor;
		color: @textColor;
	}
	.normal {
		.btn-default();
	}
	.actived {
		color: #E1017E;
		border: 1px solid #E1017E;
	}
	.btn-save {
		.btn-default(#E1017E, #E1017E, #fff);
		width: 200px;
		left: 50%;
		margin-left: -100px;
	}	
</style>