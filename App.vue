<script>
export default {
	onLaunch: function() {
		console.log('App Launch'); 		
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
	@import url("/static/ali_font/iconfont.css");
	/* @import url("//at.alicdn.com/t/font_1787456_3jl5nzy4r6q.css"); */
	@import url("/static/css/public.css");
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
@font-face {
	font-family: "iconfont";
	src: url('/static/ali_font/iconfont.ttf');
}	
.shadow{
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,.5);
}
::-webkit-scrollbar {  
    display: none;  
    width: 0 !important;  
    height: 0 !important;  
    -webkit-appearance: none;  
    background: transparent;  
}
page{
	height: 100% !important;
}
uni-page-body,#app{
	height: 100% !important;
}
/* #endif */
</style>
