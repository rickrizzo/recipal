var app = angular.module('recipals',['ngRoute', 'recipal.allRecipesCtrl']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/',{
        templateUrl:"views/home.html"
    }).
    when('/recipes',{
    	templateUrl:"views/recipes.html",
        controller:"allRecipesCtrl"
    }).
    otherwise({
        redirectTo:'/'
    });
}]);