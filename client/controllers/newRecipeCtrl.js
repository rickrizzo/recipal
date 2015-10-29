var newRecipeApp = angular.module('recipal.newRecipeCtrl', ['ui.bootstrap']);

newRecipeApp.controller('newRecipeCtrl', ['$scope', '$modal', function($scope, $modal) {

}]);

newRecipeApp.directive('addIngredient' function($compile) {
	return function(count, element, attrs) {
		element.bind("click", function() {
			angular.element(document.getElementById('prepTime')).append($compile("<h1>test</h1>")(scope));
		});
	};
});
