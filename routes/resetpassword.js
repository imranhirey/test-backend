const Register = require("../features/database");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const sendmail = require("../sendmail");

router.post("/resetpassword/:email/:link", async (req, res) => {
  console.log(1);
  const { link } = req.params;
  const email = req.body.email;
  const { password1, password2 } = req.body;
  console.log(2);
  let user = await Register.findOne({ email: email });
  console.log("jj", user);
  let secret = "something secret" + user.password;
  console.log(3);
  console.log(password1, password2);
  jwt.verify(link, secret, (err, data) => {
    if (err) {
      res.json({
        status: "error",
      });
      console.log(4);
    } else {
      Register.findOneAndUpdate(
        { email: email },
        { $set: { password: password1, confirmpassword: password2 } },
        { new: true },
        (err, doc) => {
          if (err) {
            console.log("Something wrong when updating data!");
          }
          console.log(5);
          console.log(doc);
          sendmail(null, email, "chpalert", user.fullname, "jjh");
        }
      );

      res.json({
        status: "your password has been updated successfully ..",
      });
      console.log(6);
    }
  });
});

module.exports = router;
