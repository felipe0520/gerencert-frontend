angular.module("app").filter("cpfFilter", function () {
  return function (input) {
    const cpf = input.split(" ").map((chars) => {
      if (chars.length === 3) {
        return cpf.substring(0) + ".";
      }
    });
    return char.join(" ");
  };
});
