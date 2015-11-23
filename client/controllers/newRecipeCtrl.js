var newRecipeApp = angular.module('recipal.newRecipeCtrl', []);

newRecipeApp.controller('newRecipeCtrl', ['$scope', '$http', function($scope, $http) {
	
	//Variables
	$scope.ingredients = [];	
	$scope.instructions = [];

	$scope.submitRecipe = function() {
		var dataObj = {
				name: $scope.name,
				image: $scope.image,
				cookHour: $scope.cHour,
				cookMin: $scope.cMin,
				prepHour: $scope.pHour,
				prepMin: $scope.pMin,
				difficulty: $scope.difficulty,
				description: $scope.description,
				ingredients: $scope.ingredients,
				instruction: $scope.instructions,
				restrictions : $scope.restrictions
		};
		console.log($scope.restrictions);
		var res = $http.post('/newRecipe', dataObj);
		res.success(function(data, status, headers, config) {
			$scope.message = data;
			alert("SUBMITTED!");
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});
	}

	$scope.addIngredient = function() {
		if($scope.ingredients == undefined){
			$scope.ingredients = [];
		}
		$scope.ingredients.push('');
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