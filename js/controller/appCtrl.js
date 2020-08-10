angular.module("app").controller("appCtrl", ($scope, userAPI) => {
  $scope.app = "test";

  const loadingUsers = () => {
    userAPI.getUsers().then((response) => {
      $scope.users = response.data.contacts;
      console.log(response.data.contacts);
    });
  };

  loadingUsers();
});
