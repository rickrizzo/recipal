var allRecipesApp = angular.module("recipal.allRecipesCtrl", []);

allRecipesApp.controller('allRecipesCtrl', ['$scope', '$http', function($scope, $http){

	$scope.recipes;

	$http.get('/recipes').then(function(data){
		$scope.recipes = data.data;
		console.log(data);
	}).catch(function(err){
        console.log(err);
    });


}]);