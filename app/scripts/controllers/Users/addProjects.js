'use strict';

/**
 * @ngdoc function
 * @name tpSiteIHMApp.controller:AddProjectsUserCtrl
 * @description
 * # AddProjectsUserCtrl
 * Controller of the tpSiteIHMApp
 */
angular.module('tpSiteIHMApp')
  .controller('AddProjectsUserCtrl', ['$scope', '$http', '$routeParams', '$location', 'Users', 'Projects', function ($scope, $http, $routeParams, $location, Users, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Projects.getAll(
      function(data) {
        $scope.projects = data;
      },
      function(data) {
        $scope.error = data;
      }
    );

    if ($routeParams.userId) {
      $scope.sendData = function() {
        $scope.role.UserId = $routeParams.userId;
        $scope.role.ProjectId = $scope.project.id;
        Users.addProjects($scope.role,
          function(data) {
            $location.path('/show' + '/' + data.UserId);
          }, 
          function (data) {
            $scope.error = data;
          }
        );
      };
    }

  }]);
