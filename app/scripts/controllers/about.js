'use strict';

/**
 * @ngdoc function
 * @name uiSelectTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the uiSelectTestApp
 */
angular.module('uiSelectTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
