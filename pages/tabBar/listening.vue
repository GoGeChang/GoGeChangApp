<template>
    <view>
		<view class="main-content">
			<view class="top-img-area">
				<image  
				:src="topImg"
				mode="aspectFill"
				class="top-img"
				></image>
			</view>
			
			<view class="content-card"></view>
		</view>
		<view class="main-content">
			
			<view class="top-img-area">
				<image  
				:src="topImg"
				mode="aspectFill"
				class="top-img"
				></image>
			</view>
			
			<view class="content-card"></view>
		</view>
		<view class="main-content">
			
			<view class="top-img-area">
				<image  
				:src="topImg"
				mode="aspectFill"
				class="top-img"
				></image>
			</view>
			
			<view class="content-card"></view>
		</view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
				topImg:"../../static/imges/teddy-2383694_1920.jpg"
            }
        },
        methods: {

        },
		components :{}
    }
</script>

<style>
	.zhanwei{
		height: var(--status-bar-height);
	}
	.nav{
		width: 100%;
		height: 50upx;
		background-color: #fff;
	}
	.main-content{
		background-color: #f2f2f2;
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	.content-card{		
		background-color: #fff;
	}
	.top-img-area{
		width: 100%;
		height: 666upx;
	}
	.top-img{
		width: 100%;
		height: 100%;
	}

</style>