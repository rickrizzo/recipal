var app = angular.module('recipals',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/',{
        templateUrl:"views/home.html"
    }).
    otherwise({
        redirectTo:'/'
    });
}]);