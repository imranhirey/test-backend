const Register = require("../features/database");
const router = require("express").Router();
const jsw = require("jsonwebtoken");
router.get("/verifytoken/:token", async (req, res) => {
  let token = req.params.token;
  console.log(token);
  try {
    let y = jwt.verify(token, "somethingstrong");
    let user = await Register.findOne({ email: y.email });
    if (user) {
      res.json({
        status: "valid",
      });
    } else {
      res.json("validbutnothere");
    }
  } catch (error) {
    res.json({
      status: "invalid",
    });
  }
});

module.exports = router;
