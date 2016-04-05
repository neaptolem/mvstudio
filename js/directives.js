angular.module('app')
  .directive('navigationbar', [function() {
    return {
      restrict: 'E',
      templateUrl: 'views/directive/navigationbar.html'
    }
  }])
  .directive('footbar', [function() {
    return {
      restrict: 'E',
      templateUrl: 'views/directive/footerbar.html'
    }
  }]);
