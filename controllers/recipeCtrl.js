var recipeApp = angular.module("recipal.recipeCtrl", []);

recipeApp.controller('recipeCtrl', ['$scope', function($scope){
	$scope.isFlipped = false;

	$scope.flipCard = function(){
		$scope.isFlipped= !$scope.isFlipped;
	}

}]);