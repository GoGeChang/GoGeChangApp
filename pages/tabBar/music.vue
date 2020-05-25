<template>
    <view>
		<view class="main-content" >
			<view class="top-img-area" >
				<image  
				:src="topImg"
				mode="aspectFill"
				class="top-img"				
				></image>
				<view class="shadow"></view>
			</view>		
			<view class="content-card comment">
				<view class="music-title">
					<text >我的音乐呀</text>					
				</view>
				<view class="content-card content-card-row music">
					<view class="music-items local-music" @click="toLocalMusicList()">
							<view class="music-items-icon local-music-icon" ></view>
							<text class="music-items-text" style="color: #000;" >
								本地音乐 
							</text> 
					</view>
					<view   class="music-items" 
							v-for="(val,key) in musicList" 
							:key = "key" 
							
					>							
							<image
								:src="val.backgroundImg"
								mode="scaleToFill"
								style= "width: 100% !important;height: 100% !important;"
							></image>
							<view class="shadow" ></view>
							<view class="music-items-icon repter-img" >	
								<image
									:src="val.iconImg"
									mode="scaleToFill"
									class="music-items-icon-repter-img"
								></image>
							</view>
							<text class="music-items-text" >
								{{val.title}}
							</text> 						
					</view>					
				</view>
				<view class="create-song-sheet"><icon class="iconfont iconfabu1"></icon>新建歌单</view>
			</view>
			
		</view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
				topImg:"../../static/imges/music/yj5d5k.png",
				"musicList":[
					{
						"title":"最喜欢",
						"backgroundImg":"../../static/imges/music/853819.jpg",
						"iconImg":"../../static/imges/music/like.png",
					},
					{
						"title":"纯音乐",
						"backgroundImg":"../../static/imges/music/856965.jpg",
						"iconImg":"../../static/imges/music/chunyinyueicon.png"},
					{
						"title":"写代码",
						"backgroundImg":"../../static/imges/music/xiedaimabackground.jpg",
						"iconImg":"../../static/imges/music/yuandaima.png",
					},
					{
						"title":"需要能量",
						"backgroundImg":"../../static/imges/music/cropped-828-1792-607188.jpg",
						"iconImg":"../../static/imges/music/nengliangicon.png",
					},
					{
						"title":"更多 >>>",
						"backgroundImg":"../../static/imges/music/mijas-4827988_1920.jpg",
						"iconImg":"../../static/imges/music/more.png",
					}
				]
            }
        },
        methods: {
			toLocalMusicList(){
				uni.navigateTo({
					url:"../music/music_list",
					animationType: 'pop-in',
					animationDuration:600
				})
			}
        },
		onNavigationBarButtonTap(e){
			if(e.filter === "search"){
				uni.navigateTo({
					url:"../music/music_search",
					animationType:"slide-in-right",
					animationDuration:400
				})
				
			}
		},
		components :{}
    }
</script>

<style>
	.main-content,.nav,.top-img-area,.top-img{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.content-card,.main-content{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.iconfabu1{
		font-size: 40upx;
		padding-right: 15upx;
	}
	.content-card-com{
		flex-direction: column;
	}
	.content-card-row{
		flex-direction: row;
		justify-content: space-between;
	}
	.nav{
		width: 100%;
		height: 50upx;
		background-color: #fff;
	}
	.main-content{
		/* background-color: #f2f2f2;*/
	}
	.content-card{		
		background-color: #fff;
		margin: 0 auto;
		width: 97%;
		margin: 15upx;
	}
	.music-items{
		width: 30%;
		height: 300upx;
		margin: 10upx;
		text-align: center;
		font-size: 15px;
		border:0.5px solid #C2C2C2;
		position: relative;
		border-radius:5px;
		overflow: hidden;
		box-shadow: 1px 2px 5px #C2C2C2;
	}
	.music-title{
		text-align: center;
		font-size: 18px;
		padding: 15upx 0;
		color: #444;
	}
	.music-items-icon{
		transform: translate(-50%,-100%);
		width: 100upx;
		height: 100upx;
		z-index:3;
		background-size: 100% 100%;
		color:#F2F2F2
	}
	.repter-img{ 
		transform: translate(-50%,0);
		position: absolute;
		top: 15%;
		left: 50%;
	}
	.music-items-icon-repter-img{
		width: 100% !important;
		height: 100% !important;
}

	.local-music-icon{
		background-image: url(~@/static/imges/music/bendiyinyue.png);
		z-index: 2;
		position:absolute;
		left:50%;
		top:50%;
	}
	.music-items-text{
		z-index: 2;
		position:absolute;
		left:50%;
		top:50%;
		width: 100%;
		transform: translate(-50%,0%);
		margin-top: 30upx;
		color: #fff;
		font-size: 30upx;
	}
	.music{
		flex-wrap: wrap;
	}
	.local-music{
		background-size: 50% 50%;
		background-repeat:no-repeat;
	}
	.top-img-area{
		height: 556upx;
	}
	.create-song-sheet{
		padding: 15px;
		line-height: 15px;
		border:1px solid #eee;
		color: #666;
		background-color: #007AFF;
		text-align: center;
		background-color: #fff;
		border: 1px solid #eee;
		vertical-align: middle;
		display: inline-block;
		border-radius:5px;
		white-space: nowrap;
		transition: all .4s;
		-web-kit-transition:all .4s;
		
	}
	.create-song-sheet:active{
		color: #99CCFF;		
	}
</style>