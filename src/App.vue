<template>
  <div id="app">
  	<router-link to="/home"></router-link>
  	<!-- 缓存路由组件 -->
  	<keep-alive>
	    <router-view/>
  	</keep-alive>
  </div>
</template>

<script>
	export default {
	  name: 'App',
	  components: {
	  }
	}
</script>

<style lang="less" scoped>
	
</style>
