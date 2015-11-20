var allRecipesApp = angular.module("recipal.allRecipesCtrl", []);

allRecipesApp.controller('allRecipesCtrl', ['$scope', '$http', function($scope, $http){

	$scope.recipes;

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

	$scope.setPage = function (pageNo) {
	$scope.currentPage = pageNo;
	};

	$scope.pageChanged = function() {
	$log.log('Page changed to: ' + $scope.currentPage);
	};

}]);