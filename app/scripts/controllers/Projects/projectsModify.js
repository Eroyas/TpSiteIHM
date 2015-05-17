'use strict';

/**
 * @ngdoc function
 * @name tpSiteIHMApp.controller:ProjectsModifyCtrl
 * @description
 * # ProjectsModifyCtrl
 * Controller of the tpSiteIHMApp
 */
angular.module('tpSiteIHMApp')
  .controller('ProjectsModifyCtrl', ['$scope', '$http', '$routeParams', '$location', 'Projects', function ($scope, $http, $routeParams, $location, Projects) {
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
      Projects.edit($scope.project,
        function(data) {
          $location.path('/show/projects' + '/' + data.id);
        },
        function(data) {
          $scope.error = data;
        }
      );
    };

  }]);
