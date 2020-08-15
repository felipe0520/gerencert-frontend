angular.module("app").controller("appCtrl", function ($scope, userAPI) {
  $scope.app = "test";

  const loadingUsers = function () {
    userAPI.getUsers().then(
      (response) => {
        $scope.users = response.data.users;
      },
      (error) => {
        console.error(error);
      }
    );
  };

  $scope.deleteUser = function (id) {
    const response = confirm("Do you want to delete user");
    if (response) {
      userAPI.deleteUser(id).then(
        () => {
          alert(" user successfully deleted");
          loadingUsers();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  loadingUsers();
});
