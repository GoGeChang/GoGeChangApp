<template >
	<view>
		<view class="backg-area"
			:style="{height:screenHight + 'px'}"
		>	
		<view class="release-content">
			<view class="flex flex-row" style="height: auto;justify-content: start;margin-left: 50upx;margin-top: 30upx;">
				<image src="../../static/imges/personal_center/cap-2923682_1920.jpg"
					mode="aspectFill"
					style="width: 100upx;height:100upx;border-radius:50%"
				></image>
			</view>
			<textarea placeholder="今天记录点什么..." :value = "placeholderVal"></textarea>						
			<!-- <view style="height:250upx;width:300upx;background-color: #eee;position: relative;right: 150upx;"></view> -->
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHight:0,
				placeholderVal:"曾经我也以为我是那个最特别的人。 可惜我不是。"
			}
		},
		methods: {
			
		},
		onNavigationBarButtonTap(e) {
			if(e.filter === "release"){
				uni.navigateBack({
					animationType:"zoom-fade-in"
				})
			}
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
		height: 100%;
		width: 100%;
		position: fixed;
		background-color: #f2f2f2;
	}
	.release-content{
		width: 100%;
		height:auto;
		margin-top: 14px;
		background-color: #fff;
		
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	textarea{
		width: 100%;
	}
	uni-textarea{
		height: 300upx;
		width: 95%;
		padding-top: 30upx;
	}
</style>
