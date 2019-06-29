<template>
	<div>
		<HeaderTop>
			<template v-slot:winName>我的订单</template>
		</HeaderTop>
		<NavBar :tabs="tabs"/>
	    <section id="empty" class="empty"></section>
	</div>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import NavBar from '../../components/NavBar/NavBar.vue'
	export default {
		data() {
			return {
				selected: '1',
				tabs: [{name:'待付款', icon:'icon-qianbao'}, {name:'代收款', icon:'icon-kuaidi'}, {name:'已完成', icon:'icon-gou'}],
			}
		},
		components: {
			HeaderTop,
			NavBar,
		}
	}
</script>

<style lang="less" scoped>
	.empty {
	    display: block;
	    position: absolute;
	    top: 99px;
	    width: 100%;
	    height: 100%;
	    background-color: #fff;
	    background-image: url(./image/myorder_empty.png);
	    background-repeat: no-repeat;
	    background-size: auto 93px;
	    background-position: center 50px;
	}
</style>