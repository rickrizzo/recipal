var app = angular.module('recipals',['ngRoute', 'ngCookies', 'ui.bootstrap','mwl.calendar', 'recipal.homeCtrl',
 'recipal.allRecipesCtrl', 'recipal.recipeCtrl', 'recipal.newRecipeCtrl', 'recipal.calendarCtrl']);

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
    when('/login',{
        templateUrl:"client/views/login.html",
        controller:"loginController"
    }).
    when('/register',{
        templateUrl:"client/views/register.html",
        controller:"registerController"
    }).
    when('/calendar',{
        templateUrl:"client/views/calendar.html",
        controller:"calendarCtrl"
    }).
    otherwise({
        redirectTo:'/'
    });
}]);


app.controller('indexCtrl', ['$scope', 'AuthService', '$cookies', '$location', function($scope, AuthService, $cookies, $location){
    $scope.user = $cookies.get('username');

    $scope.isLoggedIn = function(){
        return AuthService.isLoggedIn();
    }

    $scope.setUser = function(name){
        $scope.user = name;
    }

    $scope.logout = function(){
        AuthService.logout().then(function () {
          $location.path('/');
          $scope.user = '';
        });
    }
}]);