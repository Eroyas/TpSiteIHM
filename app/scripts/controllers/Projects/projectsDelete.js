'use strict';

/**
 * @ngdoc function
 * @name tpSiteIHMApp.controller:ProjectsDeleteCtrl
 * @description
 * # ProjectsDeleteCtrl
 * Controller of the tpSiteIHMApp
 */
angular.module('tpSiteIHMApp')
  .controller('ProjectsDeleteCtrl', ['$scope', '$http', '$routeParams', '$location', 'Projects', function ($scope, $http, $routeParams, $location, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.projectId) {
      Projects.get($routeParams.projectId,
        function(data) {
          $scope.project = data;
        },
        function(data) {
          $scope.error = data;
        }
      );
    }

    $scope.sendData = function() {
      Projects.delete($routeParams.projectId,
        function(data) {
          $location.path('/projects');
        },
        function(data) {
          $scope.error = data;
        }
      );
    };

  }]);
