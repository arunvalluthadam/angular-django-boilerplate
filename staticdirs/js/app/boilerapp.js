var app = angular.module("BoilerApp", []);

// -------------------------------- config section ----------------------------------

app.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

// app.config(function($httpProvider) {
// 	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
// 	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
// });

// ----------------------------- End config section ----------------------------------


app.controller("BoilerCtrl", function($scope) {

	$scope.first = "Hello World";

});