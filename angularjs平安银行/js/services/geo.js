//自定义定位服务
define(['app'], function(app) {
	app.provider('getGeoFactory', function() {
		return {
			latitude: null, //纬度
			longitude: null, //经度
			$get: ['$http', '$q', function($http, $q) {
				function geo(showGeo) {
					console.log('开始定位。。。');
					var _this = this;
					var defer = $q.defer();
					if (_this.latitude != null && _this.longitude != null) {
						var lat = pos.coords.latitude;
						var lng = pos.coords.longitude;
						getPos(lng, lat).then(function(res) {
							defer.resolve(res);
							showGeo && showGeo(res);
						});
					} else {
						window.navigator.geolocation.getCurrentPosition(function(pos) {
							var lat = pos.coords.latitude;
							var lng = pos.coords.longitude;
							getPos(lng, lat).then(function(res) {
								defer.resolve(res);
								showGeo && showGeo(res);
							});
						});
					}

					return defer.promise;
				}

				function getPos(lng, lat) {
					var defer = $q.defer();
					//请求百度坐标
					$http.jsonp('http://api.map.baidu.com/geoconv/v1/?coords=' + lng + ',' + lat + '&from=1&to=5&ak=A226e59f9ee3bbbe0fcc35878b45787b&callback=JSON_CALLBACK')
						.success(function(res) {
							console.log('百度坐标获取成功.....');
							console.log(res);
							$http.jsonp('http://api.map.baidu.com/geocoder/v2/?callback=JSON_CALLBACK&location=' +
									res.result[0].y + ',' + res.result[0].x + '&output=json&pois=1&ak=A226e59f9ee3bbbe0fcc35878b45787b')
								.success(function(res) {
									console.log('地理位置获取成功。。。。');
									defer.resolve(res.result);
									console.log(res.result);
								});
						});
						return defer.promise;
				}

				return {
					geo: geo
				}
			}]
		}
	});
});