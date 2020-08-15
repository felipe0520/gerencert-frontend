angular.module("app").factory("userAPI", function ($http, config) {
  const getUsers = function () {
    return $http.get(config.baseUrl + "/user/getAll");
  };

  const getUserDetail = async function (id) {
    return await $http.get(config.baseUrl + `/user/get?id=${id}`);
  };

  const postAlterUser = async function (user) {
    return await $http.post(
      config.baseUrl + `/user/update?id=${user._id}`,
      user
    );
  };

  const postCreateUser = async function (user) {
    return await $http.post(config.baseUrl + `/user/newUser`, user);
  };

  const deleteUser = async function (id) {
    return await $http.delete(config.baseUrl + `/user/delete?id=${id}`);
  };

  return { getUsers, getUserDetail, postAlterUser, postCreateUser, deleteUser };
});
