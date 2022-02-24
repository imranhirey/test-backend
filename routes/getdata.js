const Register = require("../features/database");
const router = require("express").Router();
const jsw = require("jsonwebtoken");
router.post("/getdata", async (req, res) => {
  let { key, token } = req.body;
  if (key == 123) {
    jwt.verify(token, "somethingstrong", async (error, data) => {
      if (data) {
        let user = await Register.findOne({ email: data.email }).then((x) => {
          res.json({
            user: x,
          });
        });
      }
    });
  } else {
    res.json({
      status: "notok",
    });
  }
});

module.exports = router;
