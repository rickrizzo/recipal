var app = angular.module('recipals',['ngRoute', 'ui.bootstrap', 'recipal.homeCtrl',
 'recipal.allRecipesCtrl', 'recipal.recipeCtrl', 'recipal.newRecipeCtrl']);

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
    when('/newRecipe',{
        templateUrl:"client/views/newRecipe.html",
        controller:"newRecipeCtrl"
    }).
    when('/recipes/:recipe',{
        templateUrl:"client/views/recipeTemplate.html",
        controller:"recipeCtrl"
    }).
    otherwise({
        redirectTo:'/'
    });
}]);