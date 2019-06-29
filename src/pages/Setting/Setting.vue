<template>
	<div>
		<HeaderTop :winName="winName"/>
		<div class="content">
			<mt-cell title="清除缓存" is-link>
			</mt-cell>
			<mt-cell title="关于" is-link>
			</mt-cell>
			<mt-button size="large" class="btn-logout">退出登录</mt-button>
		</div>
	</div>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	export default {
		data () {
			return {
				winName: '设置',
			}
		},
		components: {
			HeaderTop,
		}
	}
</script>

<style lang="less" scoped>
	.content {
		padding-top: 50px;
	}	
	.btn-logout {
		width: 260px;	
		left: 50%;
		margin-left: -130px;
		border-radius: 10px;
		color: #fff;
		background: #f00;
	}
</style>