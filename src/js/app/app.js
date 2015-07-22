(function(acs) {

	// TODO: Split into seperate files instead of a monolythic one.
	
	'use strict';

	var app = angular.module('awesomeCodeSessionApp', []);
	
	app.run(['$rootScope', function($rootScope) {
		// Initialize app
		$rootScope.appHeader = 'Awesome Code Session';
	}]);
	
	app.directive('acsChartist', [function() {
		function link(scope, element, attrs) {
			var data = {
			  labels: ['Clicked', 'Opened', 'Failed', 'Unsubscribed'],
			  series: [1609, 3714, 1361, 742]
			};

			var options = {
			  donut: true,
			  donutWidth: 25,
			  labelInterpolationFnc: function(value) {
				return value[0]
			  }
			};

			// TODO use element
			new Chartist.Pie('.ct-chart', data, options);
		}
		
		return {
			link: link
		};
	}]);
	
	app.controller('chartistController', ['$scope', function($scope) {
		// TODO	
		$scope.data = {
		  labels: ['Clicked', 'Opened', 'Failed', 'Unsubscribed'],
		  series: [1609, 3714, 1361, 742]
		};
	}]);
	
}(window.AwesomeCodeSession = window.AwesomeCodeSession || {}));
