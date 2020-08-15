angular
  .module("app")
  .controller("addContactCtrl", function ($scope, userAPI, $location) {
    $scope.handleDataUser = function (event, user) {
      event.preventDefault();
      userAPI.postCreateUser(user).then(
        function (response) {
          alert(response.data);
          $location.path("/contacts");
        },
        function (error) {
          alert(error.data.message);
        }
      );
    };
  });
