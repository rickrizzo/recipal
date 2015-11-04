angular.module('recipals').factory('AuthService', ['$q', '$timeout', '$http', '$cookies',  function ($q, $timeout, $http, $cookies) {

    // create user variable
    var user = $cookies.get('loggedIn');

    function isLoggedIn() {
      return $cookies.get('loggedIn') == 'true';
    }

    function getUserStatus() {
      return user;
    }

    function login(username, password) {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a post request to the server
      $http.post('/login', {username: username, password: password})
        // handle success
        .success(function (data, status) {
          if(status === 200 && data.status){
            $cookies.put('username', data.username);
            $cookies.put('loggedIn', true);
            user = true;
            deferred.resolve();
          } else {
            $cookies.remove('username');
            $cookies.put('loggedIn', false);
            user = false;
            deferred.reject();
          }
        })
        // handle error
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    function logout() {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a get request to the server
      $http.get('/logout')
        // handle success
        .success(function (data) {
          user = false;
          $cookies.remove('username');
          $cookies.put('loggedIn', false);
          deferred.resolve();
        })
        // handle error
        .error(function (data) {
          $cookies.remove('username');
          $cookies.put('loggedIn', false);
          user = false;
          deferred.reject();
        });

      // return promise object
      return deferred.promise;
    }

    function register(username, password) {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a post request to the server
      $http.post('/register', {username: username, password: password})
        // handle success
        .success(function (data, status) {
          if(status === 200 && data.status){
            deferred.resolve();
          } else {
            deferred.reject();
          }
        })
        // handle error
        .error(function (data) {
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    // return available functions for use in controllers
    return ({
      isLoggedIn: isLoggedIn,
      getUserStatus: getUserStatus,
      login: login,
      logout: logout,
      register: register
    });
}]);

