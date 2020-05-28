<template >
	<view>
		<view class="backg-area"
			:style="{height:screenHight + 'px'}"
		>	
		<view class="shadow"></view>
		</view>
		<view  class="main-area"
			:style="{height:screenHight + 'px'}"
		>
			<view class="release-content"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHight:0
			}
		},
		methods: {
			
		},
		onShow() {		
			uni.getSystemInfo({
				success: (res) => {					
					this.screenHight = res.windowHeight;
				}
			})			
		}
	}
</script>

<style>
	.backg-area{
		background-image: url(../../static/imges/index/xiangce/greece-2197996_1920.jpg);
		height: 100%;
		width: 100%;
		background-size: 100% 100%;
		background-color:#eee ;		
		position: fixed;
	}
	.release-content{
		width: 100%;
		height: ;
	}
</style>
