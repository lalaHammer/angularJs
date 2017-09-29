define(['app'], function(app) {
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', { //营业网点
			templateUrl: 'view/yywd.html',
			controller: 'yywdCtrl'
		}).when('/wdxq/:num', { //网点详情
			templateUrl: 'view/wdxq.html',
			controller: 'wdxqCtrl'
		}).when('/wdxq/:num/shxq/:num2',{ //商户详情
			templateUrl:'view/shxq.html',
			controller:'shxqCtrl'
		}).when('/shxq/jrcs',{ //金融超市
			templateUrl:'view/jrcs.html',
			controller:'jrcsCtrl'
		}).when('/shxq/jrcs/cpxq',{ //产品详情
			templateUrl:'view/cpxq.html',
			controller:'cpxqCtrl'
		}).when('/shxq/jrcs/jjxq',{ //基金详情
			templateUrl:'view/jjxq.html',
			controller:'jjxqCtrl'
		});
	}]);

});