angular.module('app.feedback', ['firebase'])
  .controller('feedbackCtrl', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray) {
      var ref = new Firebase('https://mvstudio.firebaseio.com/');
      $scope.msgs = $firebaseArray(ref);
      $scope.addMessage = function() {
        var timestamp = new Date().valueOf();
        $scope.msgs.$add({
          id: timestamp,
          author: $scope.author,
          message: $scope.message
        });
        $scope.author = "";
        $scope.message = "";
      };
    }
  ]);
