var app = angular.module('recipals',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/',{
        templateUrl:"views/home.html"
    }).
    when('/recipes',{
    	templateUrl:"views/recipes.html"
    }).
    otherwise({
        redirectTo:'/'
    });
}]);