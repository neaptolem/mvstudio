angular.module('app', ['ngRoute',
    'app.directives',
    'app.map',
    'app.feedback'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/price', {
        templateUrl: 'views/price.html'
      })
      .when('/feedback', {
        templateUrl: 'views/feedback.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
