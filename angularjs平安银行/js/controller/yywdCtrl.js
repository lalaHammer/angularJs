//营业网点控制器
define(['app'],function(app){
	app.controller('yywdCtrl', ['$scope', '$http', '$rootScope','$filter', function($scope, $http, $rootScope,$filter) {
		$rootScope.title = '营业网点';
		$rootScope.btnFlag = false;//回退按钮
		$scope.moreFlag=true;//加载更多
		$scope.arr = [];
		var page = 1;
		var totalPage = 0;
		$http.jsonp('http://192.168.7.9/www/my_angular/php/getWdListData.php?page=' + page + '&callback=JSON_CALLBACK').then(function(res) {
			$scope.arr = res.data.branchs;
//			console.log(res);
			totalPage = Math.ceil(res.data.pagination.pageSize / 4);
						
		});

		$scope.showMore = function() {
			page++;
			if (page <= totalPage) {
				$http.jsonp('http://192.168.7.9/www/my_angular/php/getWdListData.php?page=' + page + '&callback=JSON_CALLBACK').then(function(res) {
					$.each(res.data.branchs, function(i,item) {
						$scope.arr.push(item);
					});
				});
			}else{
				$scope.moreFlag=false;
			}
		};
		
		$scope.search='';
		$scope.search_btn=function(){
			console.log('正在搜索..');
			$scope.$watch('search',function(newVla){
				$scope.arr=$filter('filter')($scope.arr,newVla);
			});
		}

	}]);
});