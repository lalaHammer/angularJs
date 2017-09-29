//require 主入口文件

//配置路径
require.config({
	paths:{
		'angular':'libs/angular.min',
		'jquery':'libs/jquery203',
		'angular-route':'libs/angular-route.min',
		'app':'app',
		'route':'route/route',//路由
		'yywdCtrl':'controller/yywdCtrl',//营业网点控制器
		'wdxqCtrl':'controller/wdxqCtrl',
		'shxqCtrl':'controller/shxqCtrl', //商户想起控制器
		'backBtn':'directive/backBtn',//指令,回退按钮
		'geo':'services/geo',  //定位服务
		'getGeo':'directive/getGeo',//定位插件
		'copy':'directive/fuyong', //复用插件
		'cpxq':'controller/cpxqCtrl',//产品详情
		'jrcs':'controller/jrcsCtrl',//金融超市
		'jjxq':'controller/jjxqCtrl',  //基金详情
	},
	shim:{
		//定义模块依赖关系
		'angular':{
			exports:'angular'
		},
		'angular-route':{
			deps:['angular'],  //该插件的依赖关系
			exports:'angular-route'
		}
		
	}
});


//引入模块
require(['angular','jquery','angular-route','app','route','yywdCtrl',
'wdxqCtrl','backBtn','copy','shxqCtrl','geo','getGeo','jrcs','cpxq','jjxq'],function(angular){
	
	//注册模块
	angular.bootstrap(document,['app']);
});
