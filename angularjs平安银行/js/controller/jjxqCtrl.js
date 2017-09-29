//基金详情
define(['app'],function(app){
	app.controller('jjxqCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
		$rootScope.title="基金详情";
		$rootScope.btnFlag= true;
		$scope.arr=[];
		$http.get('json/jjxq.json').then(function(res){
			$scope.arr=res.data;
//			console.log($scope.arr);
		});
	}]);
});