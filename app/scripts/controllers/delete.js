'use strict';

/**
 * @ngdoc function
 * @name tpSiteIHMApp.controller:DeleteCtrl
 * @description
 * # DeleteCtrl
 * Controller of the tpSiteIHMApp
 */
angular.module('tpSiteIHMApp')
  .controller('DeleteCtrl', ['$scope', '$http', '$routeParams', 'Users', function ($scope, $http, $routeParams, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if($routeParams.userId) {
      Users.delete($routeParams.userId,
        function(data) {
          $scope.msg = "Supprimé !";
        },
        function(data) {
          $scope.msg = "Erreur !";
        }
      );
    }

  }]);
