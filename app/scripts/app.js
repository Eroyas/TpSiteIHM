'use strict';

/**
 * @ngdoc overview
 * @name tpSiteIHMApp
 * @description
 * # tpSiteIHMApp
 *
 * Main module of the application.
 */
angular
  .module('tpSiteIHMApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/users' , {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/show/:userId', {
        templateUrl: 'views/Users/show.html',
        controller: 'ShowCtrl'
      })
      .when('/edit/:userId', {
        templateUrl: 'views/Users/modify.html',
        controller: 'ModifyCtrl'
      })
      .when('/delete/:userId', {
        templateUrl: 'views/Users/list.html',
        controller: 'DeleteCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

    $(".nav a").on("click", function() {
      $(".nav").find(".active").removeClass("active");
      $(this).parent().addClass("active");
    });

    $('a[href^="#"]').click(function() {
      var le_id = $(this).attr("href");

      $('html, body').animate({scrollTop:$(le_id).offset().top}, 'slow');
      return false;
    })

  });
