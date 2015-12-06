var preferencesApp = angular.module("recipal.preferencesCtrl", []);
preferencesApp.controller('preferencesCtrl',['$scope', '$http', function($scope, $http){

	$scope.preferences= [];

	//retrieves preferences for user from server
	$http.get('/preferences').then(function(data){
		$scope.preferences = data.data.preferences;
	}).catch(function(err){
		console.log(err);
	});

	//sends preference to server to add it to users preference list
	$scope.addPreference = function() {
		
		var res = $http.post('/preferences', {'preferenceName': $scope.preferenceName});
		res.success(function(data, status, headers, config) {
			$scope.preferences.push($scope.preferenceName);
			$scope.preferenceName = '';
			$scope.message = data;
		});
		res.error(function(data, status, headers, config) {
			alert("failure message: " + JSON.stringify({data: data}));
		});
	}

}]);