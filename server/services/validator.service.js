const { isEmail, isStrongPassword, isMobilePhone } = require("validator");
const errorHandler = require("../handlers/error.handler");
const postUserSignupValidator = (name, email, password, mobile) => {
  if (!name || !email || !password || !mobile) {
    throw errorHandler(400, "All Fields Required!");
  }
  if (name.length < 3) throw errorHandler(400, "Invalid Name!");

  if (!isEmail(email)) throw errorHandler("Invalid Email");
  if (!isStrongPassword(password))
    throw errorHandler("Strong Password Required!");
  if (!isMobilePhone(mobile, "any"))
    throw errorHandler("Invalid Mobile Number");
};

const postLoginValidator = (email, password) => {
  if (!email) throw errorHandler(400, "Email Required!");
  if (!password) throw errorHandler(400, "Password Required!");
  if (!isEmail(email)) throw errorHandler(400, "Email Not Valid");
};

module.exports = { postUserSignupValidator, postLoginValidator };
