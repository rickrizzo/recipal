var recipeApp = angular.module("recipal.recipeCtrl", []);

//controller for individual recipe
recipeApp.controller('recipeCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
	$scope.isFlipped = false;
	$scope.recipe;

	//request to retrieve information for individual recipe
	$http.get('/recipes/'+ $routeParams.recipe).then(function(data){
		$scope.recipe = data.data;
		console.log(data);
	}).catch(function(err){
        console.log(err);
    });
	$scope.flipCard = function(){
		$scope.isFlipped = !$scope.isFlipped;
	};
	


}]);
