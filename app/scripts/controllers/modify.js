'use strict';

/**
 * @ngdoc function
 * @name tpSiteIHMApp.controller:ModifyCtrl
 * @description
 * # ModifyCtrl
 * Controller of the tpSiteIHMApp
 */
angular.module('tpSiteIHMApp')
  .controller('ModifyCtrl', ['$scope', '$http', '$routeParams', 'Users', function ($scope, $http, $routeParams, Users) {
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
      Users.edit($scope.user,
        function(data) {
          $location.path('/show' + '/' + data.id);
        },
        function(data) {
          $scope.error = data;
        }
      );
    };

  }]);
