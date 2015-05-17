'use strict';

/**
 * @ngdoc function
 * @name tpSiteIHMApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the tpSiteIHMApp
 */
angular.module('tpSiteIHMApp')
  .controller('UsersCtrl', ['$scope', '$http', '$location', 'Users', function ($scope, $http, $location, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(".tab-users").hide();

    $(".navbar, .navbar-header, .btn-navbar").click(function() {
      $('.tab-users').fadeOut();
      $('.list-users').fadeIn();
    })

    $("#btn-add").click(function() {
      $('.tab-users').hide();
      $('.list-users').hide();
      $('#table-add').fadeIn();
    })

    Users.getAll(
      function(data) {
        $scope.users = data;
      },
      function(data) {
        $scope.error = data;
      }
    );

    $scope.sendData = function() {
      Users.add($scope.user,
        function(data) {
          $location.path('/show' + '/' + data.id);
        },
        function(data) {
          $scope.error = data;
        }
      );
    };

  }]);
