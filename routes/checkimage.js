const Register = require("../features/database");
const jsw = require("jsonwebtoken");
const router = require("express").Router();

router.post("/checkimage", async (req, res) => {
  const token = req.body.token;
  jwt.verify(token, "somethingstrong", async (error, data) => {
    if (data) {
      let user = await Register.findOne({ email: data.email }).then((x) => {
        if (x.image != "") {
          res.json({
            status: x.image,
          });
        } else {
          res.json({
            status: "notok",
          });
        }
      });
    }
  });
});

module.exports = router;
