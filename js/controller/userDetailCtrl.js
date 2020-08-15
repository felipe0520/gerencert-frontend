angular
  .module("app")
  .controller("userDetailCtrl", function (
    $scope,
    $location,
    userAPI,
    getUserData
  ) {
    $scope.user = getUserData;

    $scope.alterUser = function (event, user) {
      event.preventDefault();
      userAPI.postAlterUser(user).then(
        () => {
          $location.path("/contacts");
        },
        (error) => {
          console.error(error);
        }
      );
    };
  });
