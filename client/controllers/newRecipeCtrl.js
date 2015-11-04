var newRecipeApp = angular.module('recipal.newRecipeCtrl', []);

newRecipeApp.controller('newRecipeCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.count = 0;

	$scope.submitRecipe = function() {
		$http({
			method: 'POST',
			url: '/newRecipe'
		}).then(function success(response) {
			alert("SUBMITTED!");
		}, function error(response) {
			alert("SUBMITTED!");
		});
	}
}])

newRecipeApp.directive("testDir", function() {
	return {
		restrict: "E",
		template: "<button addbuttons>Click to add buttons</button>"
	}
});