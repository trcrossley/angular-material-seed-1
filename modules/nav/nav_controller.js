'use strict'

var navModule = angular.module('NavModule', [
  'ui.router',
  'ngMaterial'
])

.controller('NavController', ['$scope', function($scope) {
  console.log('NavController');
}]);