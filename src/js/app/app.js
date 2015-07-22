(function(acs) {

	'use strict';

	var app = angular.module('awesomeCodeSessionApp', []);
	
	app.run(['$rootScope', function($rootScope) {
		// Initialize app
		$rootScope.appHeader = 'Awesome Code Session';
	}]);
	
}(window.AwesomeCodeSession = window.AwesomeCodeSession || {}));
