var calendarApp = angular.module("recipal.calendarCtrl", ['mwl.calendar', 'ui.bootstrap']);

calendarApp.controller('calendarCtrl', ['$scope', '$uibModal', '$http', function($scope, $uibModal, $http){
	$scope.calendarView = 'week';
	$scope.calendarDay = new Date();
	$scope.weekday = new Array(7);
	$scope.weekday[0]=  "Sunday";
	$scope.weekday[1] = "Monday";
	$scope.weekday[2] = "Tuesday";
	$scope.weekday[3] = "Wednesday";
	$scope.weekday[4] = "Thursday";
	$scope.weekday[5] = "Friday";
	$scope.weekday[6] = "Saturday";
	$scope.recipe;
	$http.get('/recipes/Meatloaf').then(function(data){
		$scope.recipe = data.data;
			$scope.events = [
	  {
	    title: '<div>'+$scope.recipe.name + '</div>' + '<img width="100%" src="'+$scope.recipe.image +'">', // The title of the event 
	    type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special 
	    startsAt: new Date(), // A javascript date object for when the event starts 
	    endsAt: new Date(), // Optional - a javascript date object for when the event ends 
	    editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable. 
	    deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable 
	    draggable: true, //Allow an event to be dragged and dropped 
	    resizable: true, //Allow an event to be resizable 
	    incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view 
	    recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month 
	    cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc 
	  }
	];
		console.log(data);
	}).catch(function(err){
        console.log(err);
    });

	$scope.isCellOpen = true;

    /*
     var currentYear = moment().year();
     var currentMonth = moment().month();

    function random(min, max) {
      return Math.floor((Math.random() * max) + min);
    }

    for (var i = 0; i < 1000; i++) {
      var start = new Date(currentYear,random(0, 11),random(1, 28),random(0, 24),random(0, 59));
     $scope.events.push({
        title: 'Event ' + i,
        type: 'warning',
        startsAt: start,
        endsAt: moment(start).add(2, 'hours').toDate()
      })
    }*/

    function showModal(action, event) {
      $uibModal.open({
        templateUrl: 'client/views/recipeModal.html',
        controller: ['$scope', function(scope) {
          scope.weekday = $scope.weekday;
          scope.recipe = $scope.recipe;
          scope.action = action;
          scope.event = event;
        }]
      });
    }

    $scope.eventClicked = function(event) {
      showModal('Clicked', event);
    };

    $scope.eventEdited = function(event) {
      showModal('Edited', event);
    };

    $scope.eventDeleted = function(event) {
      showModal('Deleted', event);
    };

    $scope.eventTimesChanged = function(event) {
      showModal('Dropped or resized', event);
    };

    $scope.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };



}]);
