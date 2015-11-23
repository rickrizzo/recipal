var preferencesApp = angular.module("recipal.preferencesCtrl", []);
preferencesApp.controller('preferencesCtrl',['$scope', '$http', function($scope, $http){

	$scope.preferences;

	$http.get('/preferences').then(function(data){
		$scope.preferences = data.data.preferences;
	}).catch(function(err){
		console.log(err);
	});

	$scope.createPreference = function() {
		var dataObject = $scope.preferenceName;
		var res = $http.post('/preferences', dataObject);
		res.success(function(data, status, headers, config) {
			$scope.message = data;
			alert("SUBMITTED!");
		});
		res.error(function(data, status, headers, config) {
			alert("failure message: " + JSON.stringify({data: data}));
		});
	}

}]);