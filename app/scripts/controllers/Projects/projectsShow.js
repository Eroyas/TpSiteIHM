'use strict';

/**
 * @ngdoc function
 * @name tpSiteIHMApp.controller:ProjectsShowCtrl
 * @description
 * # ProjectsShowCtrl
 * Controller of the tpSiteIHMApp
 */
angular.module('tpSiteIHMApp')
  .controller('ProjectsShowCtrl', ['$scope', '$http', '$routeParams', 'Projects', function ($scope, $http, $routeParams, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.projectId) {
      Projects.get($routeParams.projectId,
        function(data) {
          $scope.currentProject = data;
        },
        function(data) {
          $scope.error = data;
        }
      );

      Projects.getRoles($routeParams.projectId,
        function(data) {
          var users = new Array();
          var roles = new Array();
          roles = data;
          for(var i = 0 ; i < roles.length ; ++i) {
            var role = roles[i];
            Projects.getUsers(role.UserId,
              function(data) {
                data.role = role.name;
                users.push(data);
              },
              function(data) {
                $scope.error = data;
              }
            );
          }
          $scope.users = users;
        },
        function(data) {
          $scope.error = data;
        }
      );
    }

  }]);
