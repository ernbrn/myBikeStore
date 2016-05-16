(function () {
  angular.module('bikeStore', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/bikes', {
      templateUrl: 'bikes/bikes.html'
    })
    .when('/mountainBikes', {
      templateUrl: 'mountainBikes/mountainBikes.html'
    })
    .when('/recumbentBikes', {
      templateUrl: 'recumbentBikes/recumbentBikes.html'
    })
    .when('/home', {
      templateUrl: 'home.html'
    })
    .otherwise({redirectTo: '/home'})
  }]);
})()
