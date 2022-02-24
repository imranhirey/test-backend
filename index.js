const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const imran = require("./verify");
const { json } = require("body-parser");
const { use } = require("express/lib/application");
const jwt = require("jsonwebtoken");
const sendmail = require("./sendmail");
const jsw = require("jsonwebtoken");
const verifytoken = require("./routes/verifytokens");
const login = require("./routes/login");
const forgotpassword = require("./routes/forgotpassword");
const register = require("./routes/register");
const resetpassword = require("./routes/resetpassword");
const verifyemail = require("./routes/verifyemail");
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyparser({}));
app.use("/", verifytoken);
app.use("/", login);
app.use("/", forgotpassword);
app.use("/", register);
app.use("/", resetpassword);
app.use("/", verifyemail);
app.listen(4000);
