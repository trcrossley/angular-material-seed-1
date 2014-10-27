'use strict'

var homeModule = angular.module('HomeModule', [
  'ui.router',
  'ngMaterial'
])

.config(function($stateProvider, $urlRouterProvider) {
  var partialsPath =  'modules/home/';
  $stateProvider

  // Home
  .state('home', {
    url: '/',
    templateUrl: partialsPath + 'home_partial.html',
    controller: 'HomeController'
  });

})

.controller('HomeController', ['$scope', function($scope) {
  console.log('HomeController');
}]);