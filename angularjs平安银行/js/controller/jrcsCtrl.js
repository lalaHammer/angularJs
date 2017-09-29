define(['app'],function(app){
	app.controller('jrcsCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
		$scope.arr=[];
		$rootScope.title='金融超市';
		$rootScope.btnFlag= true;
		$scope.show1=true;//理财
		$scope.show2=false;//基金
		$http.get('json/jrcslc.json').then(function(res){
				$scope.arr=res.data.financials;
				console.log($scope.arr);
			});
			//理财产品
		$scope.show_C1=function(){
			$scope.show1=true;
			$scope.show2=false;
			$http.get('json/jrcslc.json').then(function(res){
				$scope.arr=res.data.financials;
//				console.log($scope.arr);
			});
		}
		$scope.show_C2=function(){
			$scope.show1=false;
			$scope.show2=true;
			//基金超市
			$http.get('json/jrcsjj.json').then(function(res){
				$scope.arr=res.data.funds;
				console.log($scope.arr);
			});
		}
		
		$('.title_btn').on('click','li',function(){
			$(this).addClass('active').siblings('li').removeClass();
		});
		
		
	}]);
});