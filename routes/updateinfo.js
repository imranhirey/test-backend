const Register = require("../features/database");
const router = require("express").Router();
const jsw = require("jsonwebtoken");
router.post("/updateinfo", async (req, res) => {
  let token = req.body.token;
  let image = req.body.imageurl;
  jwt.verify(token, "somethingstrong", async (error, data) => {
    if (data) {
      let user = await Register.findOneAndUpdate(
        { email: data.email },
        { $set: { image: image } },
        { new: true }
      ).then((err, doc) => {
        if (err) {
          console.log(err);
        } else {
          console.log(doc);
        }
      });
    }
  });
});
module.exports = router;
