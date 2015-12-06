var homeApp = angular.module('recipal.homeCtrl', ['ui.bootstrap']);

//controller for home page
homeApp.controller('homeCtrl', ['$scope', '$modal', '$location','$http', function($scope, $modal, $location, $http){


    $scope.isLoggedIn = $scope.$parent.$parent.isLoggedIn;

    //open up modal to login
    $scope.loginModal = function () {
        $scope.alerts = [];
        $scope.modalInstance = $modal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'client/views/loginModal.html',
          controller: ['$scope', function(scope){
          	scope.cancel = $scope.cancel;
          }]
        });
        $scope.modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        });
    };

    //exit out modal
    $scope.cancel = function () {
        $scope.modalInstance.dismiss('cancel');
    };

    //retrieves random recipe from server
    $scope.random = function(){
      $http.get('/random').then(function(data){
        console.log(data.data);
        $location.path('/recipes/' + data.data);
      }).catch(function(err){
        console.log(err);
      });
    };


}]);