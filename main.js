var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.formModel;

  $scope.onSubmit = function (valid) {
    if (valid) {
      $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel)
        .success(function(data) {
          console.log('success data: ', data);
        })
        .error(function (error) {
           console.error('post error: ', error)
        });
    } else {
      console.log('invalid form');
    }
  } // end onSubmit

}]);
