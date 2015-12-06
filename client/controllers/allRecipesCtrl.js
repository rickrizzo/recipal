var allRecipesApp = angular.module("recipal.allRecipesCtrl", []);

//controller for recipes page
allRecipesApp.controller('allRecipesCtrl', ['$scope', '$http', function($scope, $http){

	$scope.recipes;

	//server request to get all of the recipes
	$http.get('/recipes').then(function(data){
		$scope.recipes = data.data;
		console.log(data);
	}).catch(function(err){
        console.log(err);
    });

	//pagination settings
	$scope.totalItems = 64;
	$scope.currentPage = 1;
	$scope.maxSize = 5;
	$scope.itemsPage = 15;

	//set current page for paginator
	$scope.setPage = function (pageNo) {
	$scope.currentPage = pageNo;
	};

	//log if page has changed
	$scope.pageChanged = function() {
	$log.log('Page changed to: ' + $scope.currentPage);
	};

}]);