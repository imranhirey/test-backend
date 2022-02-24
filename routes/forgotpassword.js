const sendmail = require("../sendmail");
const router = require("express").Router();
const Register = require("../features/database");
const jsw = require("jsonwebtoken");
router.post("/forgot-password", async (req, res) => {
  const email = req.body.email;
  const user = await Register.findOne({ email });
  if (user) {
    let secret = "something secret" + user.password;
    let link = jsw.sign({ user }, secret);
    let resetlink = `http://localhost:3000/resetpassword/${user.email}/${link}`;
    sendmail(resetlink, email, "resetpassword", user.fullname, resetlink);
    res.json({
      status: "valid",
    });
  } else {
    res.json({
      status: "notvalid",
    });
  }
});

module.exports = router;
