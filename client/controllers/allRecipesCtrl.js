var allRecipesApp = angular.module("recipal.allRecipesCtrl", []);

//controller for recipes page
allRecipesApp.controller('allRecipesCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $params){

	$scope.recipes;
	//pagination settings
	//$scope.totalItems = 64;
	$scope.currentPage = Number($params.pageNumber);
	$scope.maxSize = 5;
	$scope.itemsPage = 9;

	$http.get('/recipes/pageCount').then(function(data){
		$scope.totalItems = data.data.pageCount;
	}).catch(function(err){
		console.log(err);
	});

	//server request to get all of the recipes
	$http.get('/recipes?pageNumber=' + $scope.currentPage).then(function(data){
		$scope.recipes = data.data;
		console.log(data);
	}).catch(function(err){
        console.log(err);
    });

	//set current page for paginator
	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};

	//log if page has changed
	$scope.pageChanged = function() {
		$http.get('/recipes?pageNumber=' + $scope.currentPage).then(function(data){
			$scope.recipes = data.data;
			console.log(data);
		}).catch(function(err){
	        console.log(err);
	    });
	};

}]);