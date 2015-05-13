'use strict';

/**
 * @ngdoc function
 * @name tpSiteIHMApp.controller:ShowCtrl
 * @description
 * # ShowCtrl
 * Controller of the tpSiteIHMApp
 */
angular.module('tpSiteIHMApp')
  .controller('ShowCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
      .success(function(data) {
        if(data.status == "success") {
          $scope.currentUser = data.data;
        }
      });

      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId + '/Roles')
      .success(function(data) {
        $scope.currentUserRole = data.data[0];

        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $scope.currentUserRole.ProjectId)
        .success(function(data) {
          $scope.currentUserProject = data.data;
        });
      });

    }

  }]);
