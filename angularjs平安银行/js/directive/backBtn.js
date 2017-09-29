
define(['app','jquery'],function(app,$){
	//定义回退按钮指令
	app.directive('backBtn',['$window',function($window){
		return{
			restrict:'EA',
			link:function($scope,el,attr){
				$(el).on('click',function(){
					//返回上一级
					$window.history.back();
					
				});
			}
		};
	}]);
});