var newRecipeApp = angular.module('recipal.newRecipeCtrl', []);

newRecipeApp.controller('newRecipeCtrl', ['$scope', function($scope) {
	$scope.count = 0;
}])

newRecipeApp.directive("testDir", function() {
	return {
		restrict: "E",
		template: "<button addbuttons>Click to add buttons</button>"
	}
});