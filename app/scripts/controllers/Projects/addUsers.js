'use strict';

/**
 * @ngdoc function
 * @name tpSiteIHMApp.controller:AddUsersProjectCtrl
 * @description
 * # AddUsersProjectCtrl
 * Controller of the tpSiteIHMApp
 */
angular.module('tpSiteIHMApp')
  .controller('AddUsersProjectCtrl', ['$scope', '$http', '$routeParams', '$location', 'Users', 'Projects', function ($scope, $http, $routeParams, $location, Users, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Users.getAll(
      function(data) {
        $scope.users = data;
      },
      function(data) {
        $scope.error = data;
      }
    );

    if ($routeParams.projectId) {
      $scope.sendData = function() {
        $scope.role.UserId = $scope.user.id;
        $scope.role.ProjectId = $routeParams.projectId;
        Projects.addUsers($scope.role,
          function(data) {
            $location.path('/show/projects' + '/' + data.ProjectId);
          }, 
          function (data) {
            $scope.error = data;
          }
        );
      };
    }

  }]);
