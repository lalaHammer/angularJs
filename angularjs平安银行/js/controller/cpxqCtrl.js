define(['app'],function(app){
	app.controller('cpxqCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
		$scope.arr=[];
		$rootScope.title="产品详情";
		$rootScope.btnFlag =true;
		$http.get('json/lcxq.json').then(function(res){
			$scope.arr=res.data;
//			console.log($scope.arr);
		});
		$scope.buy=function(){
			alert('购买成功!!');
		}
	}]);
});