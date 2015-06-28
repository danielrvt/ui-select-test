'use strict';

/**
 * @ngdoc overview
 * @name uiSelectTestApp
 * @description
 * # uiSelectTestApp
 *
 * Main module of the application.
 */
angular
  .module('uiSelectTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.select'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function(uiSelectConfig) {
    uiSelectConfig.theme = 'selectize';
  });;
