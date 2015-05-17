'use strict';

/**
 * @ngdoc function
 * @name tpSiteIHMApp.controller:DeleteCtrl
 * @description
 * # DeleteCtrl
 * Controller of the tpSiteIHMApp
 */
angular.module('tpSiteIHMApp')
  .controller('DeleteCtrl', ['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.userId) {
      Users.get($routeParams.userId,
        function(data) {
          $scope.user = data;
        },
        function(data) {
          $scope.error = data;
        }
      );
    }

    $scope.sendData = function() {
      Users.delete($routeParams.userId,
        function(data) {
          $location.path('/users');
        },
        function(data) {
          $scope.error = data;
        }
      );
    };

  }]);
