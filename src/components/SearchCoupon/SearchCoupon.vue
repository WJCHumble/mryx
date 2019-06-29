<template>
	<div>
		<section id="search">
		    <div class="input">
		        <input id="searchText" type="search" placeholder="请输入优惠码">
		    </div>
		    <div class="button">兑换</div>
		</section>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="less" scoped>
	section {
	    position: relative;
	    top: 51px;
	    box-sizing: border-box;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-orient: horizontal;
	    -webkit-flex-flow: row;
	    flex-flow: row;
	    padding: 16px;
	    height: 60px;
	    margin-bottom: 2px;
	    // background-color: #fff;
	    .input {
	    	    -webkit-box-flex: 1;
	    	    -webkit-flex: 1;
	    	    flex: 1;
	    	    box-sizing: border-box;
	    	    padding: 6px;
	    	    padding-top: 2px;
	    	    height: 28px;
	    	    background-color: #eee;
	    	    border-radius: 14px;
	    	    input {
	    	    	    width: 100%;
	    	    	    height: 24px;
	    	    	    line-height: 16px;
			    	    background-color: #eee;
			    	    padding-top: 2px;
			    	    &:focus {
			    	    	outline: #fff;
			    	    }
	    	    	}
	    	}
	    .button {
	    	    box-sizing: border-box;
	    	    padding: 4px 16px;
	    	    margin-left: 8px;
	    	    width: 80px;
	    	    height: 28px;
	    	    text-align: center;
	    	    font-size: 16px;
	    	    color: #444;
	    	    line-height: 18px;
	    	    border-radius: 14px;
	    	    border: 1px solid #aaa;
	    	}	
	}	
</style>