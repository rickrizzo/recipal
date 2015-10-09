var app = angular.module('recipals',['ngRoute', 'recipal.allRecipesCtrl', 'recipal.recipeCtrl']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/',{
        templateUrl:"views/home.html"
    }).
    when('/recipes',{
    	templateUrl:"views/recipes.html",
        controller:"allRecipesCtrl"
    }).
    when('/recipes/:recipe',{
        templateUrl:"views/recipeTemplate.html",
        controller:"recipeCtrl"
    }).
    otherwise({
        redirectTo:'/'
    });
}]);