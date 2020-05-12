<template>
    <view >
		<view class="head">
			<view class="head-backgroundImg">
			</view>
			
			<view class="head-img-item">
				<view class="head-img">
					<view class="head-img-area " @click="openCarme">
						<image 
						:src = "headImg"
						mode = "aspectFill"
						></image>				
					</view>			
				</view>
				<view class="head-name-area">
					<text class="head-name">{{headName}}</text>
					<view class="iconfont sexType">&#xe62b;</view>	
				</view>
			</view>
		</view>
		
		<!--签名-->
		<view class="item" style="margin-top: 180upx;" @click="openTile">
			<view class="iconfont">&#xe69c;</view>			
			<text class="item-infor">{{introducation}}</text>	
			<view class="iconfont next-lower" >&#xe628;</view>	
		</view>	
		<!--地址-->
		<view class="item" >
			<view class="iconfont">&#xe62a;</view>
			<text class="item-infor" style="width:45%;">{{address}}</text>	
			<image
			:src = "chinaImg"
			></image>
		</view>
		<!--最近听歌-->
		<view class="item" >
			<view class="iconfont">&#xe600;</view>
			<text class="item-infor">最近在听：{{musical}}</text>	
			<view class="iconfont next-lower" >&#xe628;</view>
		</view>
		<!--标签-->
		<view class="item" >
			<view class="iconfont">&#xe623;</view>		
			<view class="item item-noBorder tag" @click="vibrate()">
				<uni-tag text="90后" type="error" inverted=true :circle="true" class="tag-list"></uni-tag>
				<uni-tag text="轻音乐" type="default" inverted=true :circle="true" class="tag-list"></uni-tag>
				<uni-tag text="吉他" type="primary" inverted=true :circle="true" class="tag-list"></uni-tag>
				<uni-tag text="读书" type="warning" inverted=true :circle="true" class="tag-list"></uni-tag>
				<uni-tag text="跑步" type="primary" inverted=true :circle="true" class="tag-list"></uni-tag>
				<uni-tag text="乐观" type="success" inverted=true :circle="true" class="tag-list"></uni-tag>
			</view>						
		</view>		
		<!--寄语-->
		<!-- <view class="message">
			<view class="my-message">
				<text >寄语</text>
			</view>		
			<view class="item item-noBorder">
				<text class="item-text">{{myIntroducation}}</text>
			</view>
		</view>. -->
		
    </view>
</template>
<script>		
	import uniTag from "@/components/uni-tag/uni-tag.vue";
	
    export default {
        data() {
            return { 
			   headImg:"../../static/imges/personal_center/cap-2923682_1920.jpg",
			   chinaImg:"../../static/imges/personal_center/china.png",
			   headName:"GoGeChang",
			   name:"User",
			   musical:"可惜没如果—林俊杰",
			   address:"中国-贵州省-毕节市",
			   introducation:"一直在失望却又慢慢撑起希望......",
			   likeImges:[
				   {imgName:"../../static/imges/personal_center/cap-2923682_1920.jpg"},
				   {imgName:"../../static/imges/personal_center/cap-2923682_1920.jpg"},
				   {imgName:"../../static/imges/personal_center/cap-2923682_1920.jpg"}
			   ],
			   myIntroducation:"曾经我也以为我是那个最特别的人。 可惜我不是。我自以为擅长的东西，总有人比我做得更好。我自以为与众不同的地方，其实也没什么不一样。 相比之下，我不过是一个很普通的人。 可能我拼命努力下也曾有一两次比一些人做得更好，但置身于人海之中，我顶多算是一颗大一点的鹅卵石。我很努力，但好像缺少点天赋和运气。有很多梦想，但实现起来也遥遥无期。但我没有放弃。我慢慢也能接受我是一个普通人的事实，但我也希望自己能追求喜欢的事物，哪怕回报我的不多。 也许这世界上真的存在着那样的人。存在着我永远都追不上的人，存在着我穷尽一生都难以望其项背的人。但即使再普通，我也希望活出一点点不一样的光芒。 我祈求有好运降临，我也渴望被命运所爱。但如果没有，我也不会放弃。"
            }
        },
        methods: {
			//打开摄像头
			openCarme(){
				uni.chooseImage({
					count:1,
					complete: (res) => {
						if (res.errMsg === "chooseImage:ok") {
							this.headImg = res.tempFilePaths[0]; 
						}
					}
				})
			},
			//短时间震动
			vibrate(){
				uni.vibrateShort({
					
				})
			},
			openTile(){
				var Toast = plus.android.importClass("android.widget.Toast");  
				var mToast = Toast.makeText(plus.android.runtimeMainActivity(), null, Toast.LENGTH_SHORT);  
				mToast.setText('Hello World!');  
				mToast.show();
			}
			
        },
		//页面载入的时候的事件
		onLoad(){ 
			
		},
		components:{
			uniTag
		}
    }
</script>

<style>
	@font-face {
	  font-family: 'iconfont';  /* project id 1787456 */
	  src: url('//at.alicdn.com/t/font_1787456_wxifi4zf88f.eot');
	  src: url('//at.alicdn.com/t/font_1787456_wxifi4zf88f.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1787456_wxifi4zf88f.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1787456_wxifi4zf88f.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_1787456_wxifi4zf88f.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1787456_wxifi4zf88f.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:18px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
	}
	.next-lower{
		color: #aaa;
		font-size: 25upx;
	}
	.sexType{
		color: #007AFF;position: relative;left: 15upx;top:7upx;
	}
	.uni-padding-wrap{
		padding: 0 30upx;
		margin-top: 30upx;
	}
	.display-flex,.item,.head-img,.head-name-area {
		display: flex;
		justify-content:center;
		align-items: center;
	}
	.head-name{
		color:#555;
	}
	.head-img-item{
		position: absolute;
		top:130upx;
		left: 50%;
		transform: translateX(-50%);
	}
	.head-backgroundImg{
		background-image: url(../../static/imges/personal_center/road-5089188_1920.jpg) ;
		background-size: 100% 100%;
		height: 250upx;
	}
	.head-img{		 			
		padding: 10upx 30upx;		
	}
	.head-img-area{		
		width: 200upx;		
		height: 200upx;	
		padding: 5upx;
		
	}
	.head-img-area image{
		height: 100%;
		width: 100%;
		border-radius: 50%;
		border: 3px solid #fff;	
	}
	.head-name-area{
		padding:5upx 0 15upx 0;
		color:#000;		
		font-weight: bold;
		letter-spacing: 0.5upx;
	}
	.boy{
		width: 45upx;
		height: 45upx;
		position: relative;
		left: 5upx;
	}
	.item{
		height: auto;
		/* border-bottom: 1upx solid #eee; */
		margin: 15upx;
		justify-content: flex-start;
		padding: 15upx;
	}
	.item-noBorder{
		border: none;
	}
	.item image{
		height: 50upx;
		width: 50upx;
	}
	.item-text,.item-infor{
		letter-spacing: 1.5upx;
	}
	.item-infor{
		padding-left: 40upx;
		font-size: 30upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 90%;
		color: #666;
	}
	.item-text{
		font-size: 25upx;
		text-indent: 2em;
		padding-bottom:50upx;
		
	}
	.my-message{
		text-align: center;
	}
	.tag{
		display: flex;
		flex-wrap: wrap;
	}
	.tag-list{
		margin: 5px;
	}
	.image-list img{
		margin:5px;
	}
	
</style>