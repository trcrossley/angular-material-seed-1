'use strict'

var app = angular.module('angularMaterialSeedApp', [
  'ui.router',
  'ngMaterial',

  // Application Modules.
  'NavModule',
  'HomeModule'
  ]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});