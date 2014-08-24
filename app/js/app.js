'use strict';

// Declare app level module which depends on filters, and services
angular.module('angularDemo', [
  'ngRoute',
  'angularDemo.services',
  'angularDemo.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/chat.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
