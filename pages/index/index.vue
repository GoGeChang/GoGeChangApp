<template>
    <view>
		<view class="zhanwei"></view>
		<view class="zhanwei"></view>	
		<view class="flex-row flex-com release"
			:animation = "releaseAnimation.releaseAnimation" style="height:0px;" 
		>
			<view class="flex-row flex-com " style="width: 100%;">
				<view class="flex-row flex-com" hover-class="none"  @click="toRelease('mood')">
					<image src="../../static/imges/index/mood.png" style="height: 50upx;width: 50upx;"></image>
					<view>心情</view>
				</view>
				<view class="flex-row flex-com" hover-class="none"  @click="toRelease('wish')">
					<image src="../../static/imges/index/wish.png" style="height: 50upx;width: 50upx;"></image>
					<text>心愿</text>
				</view>	
				<view class="flex-row flex-com" hover-class="none"  @click="toRelease('picture')">
					<image src="../../static/imges/index/picture.png" style="height: 40upx;width: 50upx;"></image>
					<text>上传照片</text>
				</view>	
			</view>
		</view>	
		<view class="nav-tab" >		
			<view class="nav-tab-tag" 
				v-for="(val,key) in navTab.navList"
				:key="key"
				@click="tabChang(key)"
				:class="{active:key === navTab.navTabNum}">				
				<!--绑定图标和文字-->
				<view class="iconfont nav-tab-icon" 
					  :class="navTab.navListIcon[key]">
					{{val}} 
				</view>				
			</view>	
			<view
				class="nav-tab-line" 
				:animation="navTabBottomLineAnimation"  style="left:12px;">
			 </view>			
		</view>
		<view  class="infor-tab" style="height: 100%;">
			<!--可以通过改变current的属性来改变swiper-item的索引，显示不同的界面-->
			<swiper 
				:style="{height: srcoHeight + 'px'}"
				duration = "400"
				:current="currentItemId" 
				@change="swiperChange"
			>
				<swiper-item item-id="1" > 
					<scroll-view scroll-y=true 
					
					>
						<view   class = "info-list-area"
						> 
							<view class="info-list-item" 
								  v-for="(vlue,key) in person" 
								  :key="key"
								  
							>				
								<view>
									<view class="info-head-img-area">
										<image class="info-head-img"
										 src="../../static/imges/personal_center/cap-2923682_1920.jpg"
										 mode = "aspectFill"
										></image>
									</view>						
									<view class="qianming">						
										<view class="info-name">{{vlue.name}}</view>
										<view class="info-qianming">
											<view class="iconfont iconpinglun"></view>
											<view class="info-qianming time-text">
												{{vlue.time}}
											</view>
										</view>
									</view>
								</view>
								<view>						
									<text class="infor-content">{{vlue.qianming}}</text>
								</view>				
								<view class="info-bottom">
									<view>						
										<view class="address-text">
											<view class="iconfont iconaddress"></view>
											{{vlue.address}}
										</view>						
									</view>		 
									<!-- <view class="flex-row" style="position: relative;right: 15upx;top: 8upx;">
										<view class="iconfont iconzan1"></view>
										<view class="iconfont iconpinglun1"></view>
										<view class="iconfont iconzhuanfa"></view>
									</view>	 -->		
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item item-id="2">
					<scroll-view scroll-y>
						<view class="wish-area">
							<view class="wish-list-item" 
								v-for="(val,key) in wishList"
								:key="key"
							>
								<image 
									:src = "wishList[key].image" 
									mode = "aspectFill"
									></image>
									
									<view class="wish-list-text">
										<text>{{key + 1}}.</text>
										{{wishList[key].context}} 
									</view>
									<view class="shadow"></view>
							</view>						
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item item-id="3">
					<scroll-view
						scroll-y=true
					>
						<view class="album"
						> 
							<view class="album-list-area">
								<image class="album-img" v-for="(src,key)  in album"
										   :src = "src"
										   mode="aspectFill"
										   :key = "key"
									> 
								</image>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
			<!-- <view class="footprint" v-if="navTab.navTabNum === 2">
				<map style="width: 100%;height: 100%;" ></map>
			</view> -->
		</view>		
    </view>	
</template>
<script>
	import uniFab from "../../components/uni-fab/uni-fab.vue"
	
    export default {
        data() {
            return {
				person:[
					{
						name:"常开国",
						time:"2020年5月20日",
						address:"贵州省毕节市",
						qianming:"早知如此，当初不要相遇就好了。",
					},
					{
						name:"常开国",
						time:"2020年5月20日",
						address:"贵州省贵阳市",
						qianming:"人类的伤痛并不相通，有时还会觉得有些吵闹。",
					},
					{
						name:"常开国",
						time:"2020年5月20日",
						address:"贵州省贵阳市",
						qianming:"这感情可能飞不过万水千山了..."
					},
					{
						name:"常开国",
						time:"2020年5月20日",
						address:"贵州省贵阳市",
						qianming:"当我们遇见某个人时，就不会感觉到孤单了。"
					},
					{
						name:"常开国",
						time:"2020年5月20日",
						address:"贵州省贵阳市",
						qianming:"曾经我也以为我是那个最特别的人。 可惜我不是。我自以为擅长的东西，总有人比我做得更好。我自以为与众不同的地方，其实也没什么不一样。 相比之下，我不过是一个很普通的人。 可能我拼命努力下也曾有一两次比一些人做得更好，但置身于人海之中，我顶多算是一颗大一点的鹅卵石。我很努力，但好像缺少点天赋和运气。有很多梦想，但实现起来也遥遥无期。但我没有放弃。我慢慢也能接受我是一个普通人的事实，但我也希望自己能追求喜欢的事物，哪怕回报我的不多。 也许这世界上真的存在着那样的人。存在着我永远都追不上的人，存在着我穷尽一生都难以望其项背的人。但即使再普通，我也希望活出一点点不一样的光芒。 我祈求有好运降临，我也渴望被命运所爱。但如果没有，我也不会放弃。"
					}
				],
				navTab:{
					navList:["心情","心愿","相册"],
					navListIcon:["iconxinqing","iconxinyuan","icontupian"],
					navTabNum:0,					
				},
				album:[
					"../../static/imges/road-2600673_1920.jpg",
					"../../static/imges/road-2600673_1920.jpg",
					"../../static/imges/teddy-2383694_1920.jpg",
					"../../static/imges/personal_center/road-5089188_1920.jpg",
					"../../static/imges/personal_center/cap-2923682_1920.jpg",
				],
				wishList:[
					{image:"../../static/imges/index/xinyuan/jianta.jpg",context:"见她一面......"},
					{image:"../../static/imges/index/xinyuan/kanhai.jpg",context:"带她去看大海"},
					{image:"../../static/imges/index/xinyuan/yinghua.jpg",context:"带她去日本看樱花"},
					{image:"../../static/imges/index/xinyuan/emeishan.jpg",context:"重新去一趟峨眉山"},					
					{image:"../../static/imges/index/xinyuan/huahua.jpg",context:"掌握画画技能"},
					{image:"../../static/imges/index/xinyuan/jita.jpg",context:"练好吉他"}
					
				],
				navTabBottomLineAnimation:{},
				releaseAnimation:{
					"isShow":false,
					"releaseAnimation":{}
				},
				srcoHeight:0,
				currentItemId:0
				
            }
        },
        methods: {
			tabChang(key){
				this.currentItemId = key;
				this.navTab.navTabNum = key;
				let Animation = uni.createAnimation({
					duration:300,
					timingFunction:"ease-in-out"
				});
				this.navTabBottomLineAnimation = Animation;		
				Animation.translateX(key*85).step();
				this.navTabBottomLineAnimation = Animation.export(); 				
			},
			
			toRelease(openType){
				uni.navigateTo({
					url:"release?type=" + openType,
					animationType:"",
					animationDuration:200
				})
				let mnimation = uni.createAnimation({
					duration:400, 
					timingFunction:"ease"
				}); 
				this.releaseAnimation.releaseAnimation = mnimation;
				mnimation.height(0).step();
				this.releaseAnimation.releaseAnimation = mnimation.export();
				this.releaseAnimation.isShow = false;
			
			},
			swiperChange(e){
				this.navTab.navTabNum = e.detail.current;
				let Animation = uni.createAnimation({
					duration:300,
					timingFunction:"ease-in-out"
				});
				this.navTabBottomLineAnimation = Animation;		
				Animation.translateX(e.detail.current*85).step();
				this.navTabBottomLineAnimation = Animation.export(); 
				
			}
			
        }, 
		onShow() {
			uni.getSystemInfo({
				success: res =>{
					this.srcoHeight = res.windowHeight - 40;
				}
			})
		},
		
		onNavigationBarButtonTap(e){			
			if(e.filter === "release"){				
				let mnimation = uni.createAnimation({
					duration:400, 
					timingFunction:"ease"
				}); 
				this.releaseAnimation.releaseAnimation = mnimation;
				if(this.releaseAnimation.isShow){
					mnimation.height(0).step();
					this.releaseAnimation.releaseAnimation = mnimation.export();
					this.releaseAnimation.isShow = false;
				}else{
					mnimation.height(100).step();
					this.releaseAnimation.releaseAnimation = mnimation.export();
					this.releaseAnimation.isShow = true;
				}
			}
		},
		onPullDownRefresh (){
			uni.startPullDownRefresh({
			})
			setTimeout(function(){
				uni.stopPullDownRefresh();
			},2000)
		},
		components:{uniFab}
    }
</script>

<style>
	@import url("https://at.alicdn.com/t/font_1787456_qymsrof12v.css");
	/* @import url("../../static/ali_font/iconfont.css"); */
	.address-text,.iconpinglun,.iconaddress{
		padding-right: 8upx;
	}

	.zhanwei{
		height: var(--status-bar-height);
	}
	image{
		width: 100%; 
		height: 100%;		
	}
	.flex-com{
		flex-direction: column;
		justify-content: space-around;
	}
	.nav-tab,.info-list-area,.info-bottom,.info-list-item,.info-list-item :nth-child(1),.qianming,.info-qianming,.flex-row{
		display: flex;		
	}
	.nav-tab,.time-text,.iconxiaocao,.info-name,.qianming,.iconaddress,.iconzan1,.iconpinglun1,.iconzhuanfa{
		position: relative;
	}
	.info-list-area .info-list-item :nth-child(1){
		flex-direction: row;
	}
	.info-list-area .info-list-item :nth-child(2){
		font-size: 15px;
		letter-spacing: 0.5px;
		margin:8upx;
	}
	.iconpinglun,.time-text,.address-text{
		color:#c2c2c2;
	}
	.qianming,.info-list-area{
		justify-content: center;
	}
	.flex-row,.info-list-area{
		align-items: center;
	}
	.info-list-area,.wish-area,.footprint,.album{
		
		width: 100%;
		display: flex;
		align-items:center;
		flex-flow: row wrap;
	}
	.info-list-area .info-list-item .info-qianming{
		font-size: 12px;
	}
	
	.info-list-area .info-list-item .info-name{
		color: #3f3838;
		font-size: 15px;
	}
	
	.release{
		justify-content: space-around;
		box-shadow: 0 5px 5px #eee;
		flex-direction:column;
		position: fixed;
		width: 100%;
		z-index: 2;
		background-color:rgba(255,255,255,1);
		overflow: hidden;
		height:50upx;
	}
	.nav-tab{
		padding:18px 0px 20upx 15upx;	
	}
	.nav-tab:first-child{
		margin-left: -22px;
	}
	.nav-tab-tag{
		margin-left: 30px;
		text-align: center;
		padding: 1px 3px;
		flex-direction: column;
		flex-wrap: wrap;
	}
	.nav-tab-tag:nth-child(1){
		margin-left: 5px;
	}
	.nav-tab-line{
		position: absolute;
		left: 10;
		bottom: 0;
		height: 2.5px;
		width: 55px;
		border-radius: 8px;
		background-color: #007AFF;
	}
	.active{
		color:#007AFF;
	}
	.iconzan1,.iconpinglun1,.iconzhuanfa{
		padding: 0 8px;		
		font-size:25px;
		top: -9px;
	}
	.iconzan1{
		top: -13px;
	}
	.iconpinglun1{
		font-size: 25px !important;
	}
	.info-name{
		margin-left: 3px;
		margin-top: 15upx;
	}
	.address-text,.time-text{
		font-size:15px;
	}
	.infor-content{
		padding: 20upx 20upx 0upx 10upx;
	}
	.iconaddress{
		top: 3px;
	}
	
	
	.time-text{
		font-size: 8px;
		top: -4px;
		left: -4px;
	}
	

	.wish-area{
		flex-direction: column;
		margin-top: 15px;
	}

	.wish-list-item{
		width: 100%;
		height: 150px;
		position: relative;
		text-align: center;
		line-height: 150px;
		border-top: 2px solid #fff;
		border-bottom: 2px solid #fff;
	}
	.wish-list-text{
		position: absolute;
		top: 0;
		left: 0;
		text-align: left;
		padding-left: 15px;
		width: 100%;
		color: #fff;
		z-index: 2;
	}
	.album{
		justify-content: center;
	}
	.album-img{
		width: 45% !important;
		height: 200px;
		margin-top: 15px;
		border:2px solid #eee;
	}
	.album-img:after{
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 5;
		border: 1px solid #fff;
	}
	.album-list-area{
		display: flex;
		width: 100%;
		align-items: center;
		flex-flow: row wrap;
		justify-content: space-between;
		padding: 15px;
	}
	
	.info-list-area{	
		background-color: #eee;		
		flex-direction: column;
	}
	.flex-row{
		flex-direction: row;
	}
	.info-bottom{
		flex-direction: row;
		justify-content: space-between;
		margin-top: 10px;
	}
	.info-list-item{
		width: 100%;
		margin: 20upx 0;
		margin-top: 0;
		background-color: #fff;
		flex-direction: column;
		padding: 8px;
		margin-right: 8px;
	}
	
	.info-head-img-area{
		width: 110upx;
		height: 110upx;
		padding:5upx;
	}
	.info-head-img-area image{
		height: 100%;
		width: 100%;
		border-radius: 50%;
		border: 3px solid #fff;	
	}
	.qianming{
		flex-direction: column;
		align-items:flex-start;
	}
	.shadow{
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.4);
	}
	swiper-item{
		overflow: auto;
	}
</style> 