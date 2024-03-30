const { isJWT, isStrongPassword } = require("validator");
const User = require("../models/user.model");
const ApiError = require("../handlers/error.handler");
const responseHandler = require("../handlers/response.handler");
const { postLoginValidator } = require("../services/validator.service");
const jwt = require("jsonwebtoken");
const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    postLoginValidator(email, password);
    const existingUser = await User.findOne({ email });
    if (!existingUser) throw new ApiError(404, "User not Found");
    const isValidPassword = await existingUser.comparePassword(password);
    if (!isValidPassword) throw new ApiError(400, "Invalid Password");
    if (!existingUser.isVerified) throw new ApiError(400, "Email not verified");
    const token = existingUser.generateLoginToken();
    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    return res
      .status(200)
      .json(responseHandler(200, "Login Success", { token }));
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json(new ApiError(error.statusCode || 500, error.message));
  }
};

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  try {
    if (!isJWT(verificationToken)) throw new ApiError(400, "Invalid Token");
    const { _id } = jwt.verify(verificationToken, process.env.SECRET_TOKEN);

    const user = await User.findById(_id);
    if (!user) throw new ApiError(404, "User Not Found");
    if (user.isVerified) throw new ApiError(400, "Email Already Verified");
    user.isVerified = true;
    const verifiedUser = await user.save();
    console.log(verifiedUser);
    return res
      .status(200)
      .json(responseHandler(200, "Email Verified Successfully"));
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json(new ApiError(error.statusCode || 500, error.message));
  }
};
const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      "-password -isVerified -role",
    );
    if (!user) throw new ApiError(404, "User Not Found");
    return res.status(200).json(responseHandler(200, "User Details", { user }));
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json(new ApiError(error.statusCode || 500, error.message));
  }
};

const postLogoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json(responseHandler(200, "Logout Success"));
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json(new ApiError(error.statusCode || 500, error.message));
  }
};

const postResetPassword = async (req, res) => {
  console.log(req.user);
  const { password } = req.body;
  try {
    if(!password) throw new ApiError(400, "All fields required");
    if (!isStrongPassword(password))
      throw new ApiError(400, "Password Not Strong");
    const { _id } = req.user;
    const user = await User.findById(_id);
    if (!user) throw new ApiError(404, "User Not Found");
    user.password = password;
    await user.save();
    return res.status(200).json(responseHandler(200, "Password Reset Success"));
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json(new ApiError(error.statusCode || 500, error.message));
  }
};
module.exports = { postLogin, verifyEmail, currentUser, postLogoutUser, postResetPassword};
