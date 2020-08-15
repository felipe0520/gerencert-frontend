angular.module("app").config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider.when("/contacts", {
    templateUrl: "view/contacts.html",
    controller: "appCtrl",
  });

  $routeProvider.when("/addContact", {
    templateUrl: "view/addContact.html",
    controller: "addContactCtrl",
  });

  $routeProvider.when("/userDetail:id", {
    templateUrl: "view/userDetail.html",
    controller: "userDetailCtrl",
    resolve: {
      getUserData: function (userAPI, $route) {
        return userAPI.getUserDetail($route.current.params.id).then(
          (response) => {
            response.data.birthday = new Date(response.data.birthday);

            return response.data;
          },
          (error) => {
            console.error(error);
          }
        );
      },
    },
  });

  $routeProvider.otherwise({ redirectTo: "/contacts" });
});
