//制作网点详情与商户详情的上半部分复用
define(['app','jquery'],function(app,jquery){
	app.directive('copy',function(){
		return {
			restrict:"EA",
			templateUrl:'view/copy.html',
			transclude:true,
			scope:{
				arr:'=',
				typeName:'@',
				telNum:'='
			},
			replace:true,
			controller:['$scope',function($scope){
				$scope.telFlag=false;
				$scope.change=function(){
						$scope.telFlag = !$scope.telFlag;
				}
			}]
			
		}
	});
});