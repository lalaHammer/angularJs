//定义网点详情控制器
define(['app'],function(app){
	app.controller('wdxqCtrl', ['$scope', '$http', '$routeParams', '$rootScope', function($scope, $http, $routeParams, $rootScope) {
		$rootScope.title = "网点详情";
		$rootScope.btnFlag = true;
		$scope.arr = [];
		$scope.telArr=[];
		$rootScope.telFlag=false;
		var page = 1;
		$http.jsonp('http://192.168.7.9/www/my_angular/php/getWdDataById.php?id=' + $routeParams.num + '&page=' + page + '&callback=JSON_CALLBACK').then(function(res) {
			$scope.arr = res.data;
			$scope.telArr=res.data.branch_tel.split(',');
//			console.log($scope.arr);
		});
		
	}]);
});