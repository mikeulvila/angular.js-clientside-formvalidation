var app = angular.module('minmax', [
  'jcs-autoValidate',
  'angular-ladda'
  ]);

app.run(['defaultErrorMessageResolver', function (defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
      errorMessages['tooYoung'] = 'You must be at least {0} years old to use this site';
      errorMessages['tooOld'] = 'You must be under {0} years old to use this site';
      errorMessages['badUsername'] = 'Username can only contain numbers and letters and _';
    });
}]);

app.controller('MinMaxCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.formModel = {};
  $scope.submitting = false;

  $scope.onSubmit = function () {
      $scope.submitting = true;

      $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel)
        .success(function(data) {
          $scope.submitting = false;
          console.log('success data: ', data);
        })
        .error(function (error) {
          $scope.submitting = false;
          console.error('post error: ', error)
        });

  } // end onSubmit

}]);
