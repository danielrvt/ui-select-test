'use strict';

/**
 * @ngdoc function
 * @name uiSelectTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiSelectTestApp
 */
angular.module('uiSelectTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.countries = [
      {name: 'Venezuela', id:1, states: [
        {name: 'Miranda', id:1},
        {name: 'Falcon', id:2},
        {name: 'Margarita', id:3},
        {name: 'Higuerote', id:4}
      ]},
      {name: 'Colombia', id:2, states: [
        {name: 'Cartagena', id:1},
        {name: 'Bogota', id:2},
        {name: 'Falcao', id:3},
        {name: 'James', id:4}
      ]}
    ];

    $scope.states = $scope.countries[0].states;
    $scope.currentState = {};

    $scope.stateSelected = function (item, model) {
      console.log(item, model);
      $scope.currentState = item;
    };
  });
