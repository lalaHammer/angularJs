//点击弹出菜单
define(['app'],function(app){
	app.directive('list',function(){
		return {
			restrict:'A',
			templateUrl:'view/clickTab.html',
			replace:true,
			controller:['$scope',function($scope){
				$scope.ulFlag=false;
				$scope.tab=function(){
					$scope.ulFlag =! $scope.ulFlag;
					console.log($scope.ulFlag);
				};
			}],
		};
	});
});