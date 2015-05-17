'use strict';

/**
 * @ngdoc function
 * @name tpSiteIHMApp.controller:ShowCtrl
 * @description
 * # ShowCtrl
 * Controller of the tpSiteIHMApp
 */
angular.module('tpSiteIHMApp')
  .controller('ShowCtrl', ['$scope', '$http', '$routeParams', 'Users', function ($scope, $http, $routeParams, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.userId) {
      Users.get($routeParams.userId,
        function(data) {
          $scope.currentUser = data;
        },
        function(data) {
          $scope.error = data;
        }
      );

      Users.getRoles($routeParams.userId,
        function(data) {
          var projects = new Array();
          var roles = new Array();
          roles = data;
          for(var i = 0 ; i < roles.length ; ++i) {
            var role = roles[i];
            Users.getProjects(role.ProjectId,
              function(data) {
                data.role = role.name;
                projects.push(data);
              },
              function(data) {
                $scope.error = data;
              }
            );
          }
          $scope.projects = projects;
        },
        function(data) {
          $scope.error = data;
        }
      );
    }

  }]);
