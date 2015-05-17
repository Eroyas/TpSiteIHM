'use strict';

/**
 * @ngdoc function
 * @name tpSiteIHMApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the tpSiteIHMApp
 */
angular.module('tpSiteIHMApp')
  .controller('ProjectsCtrl', ['$scope', '$http', '$location', 'Projects', function ($scope, $http, $location, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(".tab-projects").hide();

    $(".navbar, .navbar-header, .btn-navbar").click(function() {
      $('.tab-projects').fadeOut();
      $('.list-projects').fadeIn();
    })

    $("#btn-add-project").click(function() {
      $('.tab-projects').hide();
      $('.list-projects').hide();
      $('#table-add-project').fadeIn();
    })

    Projects.getAll(
      function(data) {
        $scope.projects = data;
      },
      function(data) {
        $scope.error = data;
      }
    );

    $scope.sendData = function() {
      Projects.add($scope.project,
        function(data) {
          $location.path('/show/projects' + '/' + data.id);
        },
        function(data) {
          $scope.error = data;
        }
      );
    };

  }]);
