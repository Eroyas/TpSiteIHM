'use strict';

/**
 * @ngdoc function
 * @name tpSiteIHMApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the tpSiteIHMApp
 */
angular.module('tpSiteIHMApp')
  .controller('UsersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(".tab-users").hide();

    $(".navbar, .navbar-header, .btn-navbar").click(function() {
      $('.tab-users').fadeOut();
    })

    $("#btn-add").click(function() {
      $('.tab-users').hide();
      $('#table-add').fadeIn();
    })

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
    .success(function(data) {
      $scope.users = data.data;
    });

  }]);
