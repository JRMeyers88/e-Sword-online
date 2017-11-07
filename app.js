'use strict';

const eSword = angular.module("eSword", ["ngRoute", "ngSanitize"])
.constant("Url", "https://localhost:5000");

eSword.config( ($routeProvider) => {
  $routeProvider
  .when('/', {
      templateUrl: './partials/main.html',
      controller: 'BibleController'
  })
  .otherwise('/');
});

eSword.config( ($httpProvider) => {
$httpProvider.defaults.headers.common = {};
$httpProvider.defaults.headers.post = {};
$httpProvider.defaults.headers.put = {};
$httpProvider.defaults.headers.patch = {};
});