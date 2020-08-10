angular.module("app").factory("userAPI", ($http, config) => {
  const getUsers = () => {
    return $http.get(config.baseUrl + "/contacts");
  };
  return { getUsers };
});
