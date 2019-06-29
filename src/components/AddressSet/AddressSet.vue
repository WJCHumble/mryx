<template>
	<div>
		<mt-switch v-model="value" class="switch-default">设置为默认地址</mt-switch>	
		<mt-field class="cell-size" label="收货人：" placeholder="请输入收货姓名" v-model="consigneeName"></mt-field>
		<mt-field class="cell-size" label="手机号码：" placeholder="点击输入收货人手机号码" v-model="consigneePhone"></mt-field>
		<mt-cell title="所在区域：" is-link>
		  <span style="color: #444;padding-right:52px;">点击选择收获所在的区域</span>
		</mt-cell>
		<mt-cell title="具体地址：" is-link>
		  <span style="color: #444;padding-right:22px;">点击选择具体的小区或写字楼</span>
		</mt-cell>
		<mt-field class="cell-size" label="楼号门牌号：" placeholder="点击输入楼号门牌(例A座3单元1201" v-model="doorNumber"></mt-field>
		<!-- 地址类型 -->
		<mt-cell title="地址类型：">
			<span v-for="(type, index) in addressTypes" :key="index">
				<mt-button type="default" class="normal" size="small" @click="currentTypeIndex=index" :class="{actived: currentTypeIndex==index}">{{type}}</mt-button>&nbsp;&nbsp;
			</span>
		</mt-cell>
		<br>
		<br>
		<mt-button size="large" class="normal btn-save">保存</mt-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: false,
				consigneeName: '',
				consigneePhone: '',
				doorNumber: '',
				currentTypeIndex: 0,
				addressTypes: [
					'公司',
					'住宅',
					'学校',
					'其他'
				]
			}
		},
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