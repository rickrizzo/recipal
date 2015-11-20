var calendarApp = angular.module("recipal.calendarCtrl", ['mwl.calendar', 'ui.bootstrap']);

calendarApp.controller('calendarCtrl', ['$scope', '$uibModal', function($scope, $uibModal){
	$scope.calendarView = 'week';
	$scope.calendarDay = new Date();
	$scope.events = [
	  {
	    title: 'My event title', // The title of the event 
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
        template: '<div class="modal-header"><h3 class="modal-title">Event action occurred!</h3></div><div class="modal-body"><p>Action: <pre>{{ vm.action }}</pre></p><p>Event: <pre>{{ vm.event | json }}</pre></p></div><div class="modal-footer"><button class="btn btn-primary" ng-click="$close()">OK</button></div>',
        controller: function() {
          var $scope = this;
          $scope.action = action;
          $scope.event = event;
        },
        controllerAs: '$scope'
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
