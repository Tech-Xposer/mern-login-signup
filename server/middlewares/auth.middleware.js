const jwt = require("jsonwebtoken");
const errorHandler = require("../handlers/error.handler");
const SECRET_TOKEN = process.env.SECRET_TOKEN;

const auth = (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.header("authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new errorHandler(401, "Token Not Found");
    }
    const payload = jwt.verify(token, SECRET_TOKEN);
    console.log(payload);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(error.statusCode || 500).json(new errorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = auth;
