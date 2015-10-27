var homeApp = angular.module('recipal.homeCtrl', ['ui.bootstrap']);

homeApp.controller('homeCtrl', ['$scope', '$modal', function($scope, $modal){

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

    $scope.cancel = function () {
        $scope.modalInstance.dismiss('cancel');
    };


}]);