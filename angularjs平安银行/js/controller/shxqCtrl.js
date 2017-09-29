//定义商户详情控制器
define(['app'],function(app){
	app.controller('shxqCtrl', ['$scope', '$http', '$routeParams', '$rootScope', function($scope, $http, $routeParams, $rootScope) {
		$rootScope.title = "商户详情";
		$rootScope.btnFlag = true;
		$scope.arr = [];
		$scope.telArr=[];
		var page = 1;
		$http.jsonp('http://192.168.7.9/www/my_angular/php/getShopDataById.php?id=' + $routeParams.num2 + '&page=' + page + '&callback=JSON_CALLBACK').then(function(res) {
			$scope.arr = res.data;
			$scope.telArr=res.data.shop_tel.split(',');
//			console.log($scope.arr);
		});
	}]);
});