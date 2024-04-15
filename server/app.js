const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const apiResponse = require("./handlers/response.handler");
const { auth, authToAdminOnly } = require("./middlewares/auth.middleware");
//configuring express
const app = express();

//using middlesware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:4173","https://authguardian-five.vercel.app/"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json(apiResponse(200, "Welcome to AuthGuardian!"));
});

//routes
app.use("/api/v1/user", require("./routes/user.routes"));
app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1/admin",[auth,authToAdminOnly], require("./routes/admin.routes"));

module.exports = app;
