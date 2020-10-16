//For all login field checks
const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function loginInputValidate(input) {
  //Keeps all the errors in an object
  let errors = {};

  //Here input fields are set to either the validated entered value or kept as empty
  input.email = !isEmpty(input.email) ? input.email : "";
  input.password = !isEmpty(input.password) ? input.password : "";

  //All validation checks
  if (!Validator.isEmail(input.email)) {
    errors.error = "Incorrect Email";
  }
  if (Validator.isEmpty(input.email)) {
    errors.error = "Empty email field";
  }
  if (Validator.isEmpty(input.password)) {
    errors.error = "Empty password field";
  }
  // if (!Validator.isLength(input.password, { min: 6, max: 30 })) {
  //   errors.error = "Password must be at least 6 characters";
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
