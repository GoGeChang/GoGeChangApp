
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/tabBar/personal_center","pages/tabBar/music","pages/index/release","pages/music/music_list","pages/music/music_search"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#fff","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#aaa","backgroundColor":"#fff","borderStyle":"black","iconWidth":"30px","height":"60px","list":[{"pagePath":"pages/index/index","iconPath":"static/imges/tabBar/gerenxinqing.png","selectedIconPath":"static/imges/tabBar/selectGerenxinqing.png","text":"心情"},{"pagePath":"pages/tabBar/music","iconPath":"static/imges/tabBar/musical.png","selectedIconPath":"static/imges/tabBar/selectMusical.png","text":"静听"},{"pagePath":"pages/tabBar/personal_center","iconPath":"static/imges/tabBar/ren.png","selectedIconPath":"static/imges/tabBar/selectRen.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"常开国","compilerVersion":"2.7.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"今天心情","titleNView":{"splitLine":{"color":"#eee","height":"1px"},"type":"float","buttons":[{"type":"none","text":"","fontSize":"18px","width":"60px","fontSrc":"/static/ali_font/iconfont.ttf","float":"left","filter":"more"},{"type":"none","fontSrc":"/static/ali_font/iconfont.ttf","text":"","fontSize":"25px","width":"60px","float":"right","filter":"release"}]},"scrollIndicator":"none"}},{"path":"/pages/tabBar/personal_center","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","transparentTitle":"always"}},{"path":"/pages/tabBar/music","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","transparentTitle":"always","titleNView":{"titleColor":"#fff","backgroundColor":"rgba(0,0,0,0)","buttons":[{"type":"none","text":"","fontSize":"30px","width":"60px","fontSrc":"/static/ali_font/iconfont.ttf","float":"left","filter":""},{"type":"none","fontSrc":"/static/ali_font/iconfont.ttf","text":"","fontSize":"25px","width":"60px","float":"right","filter":"search"}]}}},{"path":"/pages/index/release","meta":{},"window":{"navigationBarTitleText":"信息发布","animationType":"fade-in","animationDuration":200}},{"path":"/pages/music/music_list","meta":{},"window":{"navigationBarTitleText":" "}},{"path":"/pages/music/music_search","meta":{},"window":{"titleNView":{"searchInput":{"autoFocus":true,"borderRadius":"8px","placeholder":"输入喜欢的歌曲名吧","disabled":false,"align":"left"},"buttons":[{"type":"none","text":"搜索","fontSize":"40upx","width":"60px","float":"right","filter":"search"}],"scrollIndicator":"none"}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
