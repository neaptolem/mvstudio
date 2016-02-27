angular.module('app.directives', [])
  .directive('navigationbar', [function() {
    return {
      restrict: 'E',
      templateUrl: 'views/directive/nav.html'
    }
  }]);
