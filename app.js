var app = angular.module('recipals',['ngRoute', 'ui.bootstrap', 'recipal.homeCtrl',
 'recipal.allRecipesCtrl', 'recipal.recipeCtrl']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/',{
        templateUrl:"client/views/home.html",
        controller:"homeCtrl"
    }).
    when('/recipes',{
    	templateUrl:"client/views/recipes.html",
        controller:"allRecipesCtrl"
    }).
    when('/recipes/:recipe',{
        templateUrl:"client/views/recipeTemplate.html",
        controller:"recipeCtrl"
    }).
    when('/login',{
        templateUrl:"client/views/login.html",
        controller:"loginController"
    }).
    when('/register',{
        templateUrl:"client/views/login.html",
        controller:"registerController"
    }).
    otherwise({
        redirectTo:'/'
    });
}]);