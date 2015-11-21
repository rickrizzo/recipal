var newRecipeApp = angular.module('recipal.newRecipeCtrl', []);

newRecipeApp.controller('newRecipeCtrl', ['$scope', '$http', function($scope, $http) {
	
	//Variables
	$scope.ingredients = [];	
	$scope.instructions = [];

	$scope.submitRecipe = function() {
		console.log($scope.count);
		$http({
			method: 'POST',
			url: '/newRecipe'
		}).then(function success(response) {
			alert("SUBMITTED!");
		}, function error(response) {
			alert("Error submitting");
		});
	}

	$scope.addIngredient = function() {
		$scope.ingredients.push($scope.ingrCount);
	}
	$scope.removeIngredient = function(id) {
		$scope.ingredients.splice(id, 1);
	}

	$scope.addInstruction = function() {
		$scope.instructions.push($scope.instCount);
	}
	$scope.removeInstruction = function(id) {
		$scope.instructions.splice(id, 1);
	}
}]);