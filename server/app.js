const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')

//configuring express
const app = express();

//using middlesware

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser())

//routes
app.use('/api/v1/user', require('./routes/user.routes'))
app.use('/api/v1/auth', require('./routes/auth.routes'))

if (process.env.NODE_ENV === "dev") {
  app.use(require("morgan")("dev"));
}



module.exports = app;
