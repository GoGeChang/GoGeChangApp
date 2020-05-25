<template>
	<view>
		<view class="flex flex-com">
			<view   v-show=" hisStorgInfo === true">
				<view class="main-area flex flex-row flex-between" >
					<text class="search-historg">历史搜索</text>
					<icon class="iconfont iconshanchu"></icon>
				</view>
				<view class="flex flex-row historg-list">
					<view class="historg-items">林俊杰</view>
				</view>
			</view>
			<view class="music-list-item flex flex-row flex-between" 
					v-for="(val,key) in getSongList "
					:key="key"
					@click="useHashGetMusicInfo(val.hash)"
					>
					
				<view class="music-info flex flex-row flex-spacearound" >
					<view class="flex flex-com" style="width: 60%;">
						<text class="music-name text-over-hide-elipsis">{{ val.songname_original }}</text>
						<text class="author-name">{{val.singername}}</text>						
					</view>
					<view class="flex  flex-between" style="width:30%">
						<icon class="iconfont iconshoucang " ></icon>
						<view class="btn btn-primary">加入歌单</view>
					</view>						
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyWord:"",
				getSongList:{},
				hisStorgInfo:true
			}
		},
		methods: {
			useKeyWordGetMusicList() {
				const kuGouUrl = 'http://mobilecdn.kugou.com/api/v3/search/song';
				uni.request({
					url:kuGouUrl,
					data:{
						"format":"json",
						"keyword":this.keyWord,
						"page":"1",
						"page":"20",
						"showtype":"1"
					},
					success(data){						
						this.getSongList = data.data.data.info;
					}
					
				})
			},
			useHashGetMusicInfo(key){
				const url = 'http://www.kugou.com/song/#hash=';
				uni.request({
					url:url,
					data:{
						hash:key
					},
					success:(data) => {
						console.log(data);
					}
				})
			}
		},
		onNavigationBarButtonTap(e){			
			if(e.filter === "search"){
				const kuGouUrl = 'http://mobilecdn.kugou.com/api/v3/search/song';
				uni.request({
					url:kuGouUrl,
					data:{
						"format":"json",
						"keyword":this.keyWord,
						"page":"1",
						"pagesize":"20",
						"showtype":"1"
					},
					success:(data) =>{
						this.getSongList = data.data.data.info;
						this.hisStorgInfo = false;
					}
					
				})
			}
		},

		onNavigationBarSearchInputChanged(e){
			this.keyWord = e.text;
		}
	}
</script>

<style>
	.main-area{
		width: 99%;
		margin: 0 auto;
		margin-top: 20upx;
		overflow: hidden;
	}
	.historg-list,.search-historg{
		position: relative;
		left: 50upx;
		margin-top: 20upx;
	}
	.search-historg{
		font-size: 35upx;
	}
	.iconshanchu{
		color: #c2c2c2;
		font:30upx;
		position: relative;
		right: 50upx;
	}
	.historg-items{
		height: 30px;
		padding: 0 10px;
		border-radius: 15px;
		background-color: #eee;
		color: #666;
		font-size: 30upx;
		line-height: 30px;
	}
	.historg-list{
		justify-content: flex-start;
	}
	
	
</style>
