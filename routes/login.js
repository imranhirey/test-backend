const router = require("express").Router();
const Register = require("../features/database");
const jwt = require("jsonwebtoken");
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await Register.findOne({ email: email });
  if (user) {
    if (password === user.password) {
      const token = jwt.sign(
        { email: user.email, name: user.username },
        "somethingstrong"
      );
      console.log(token);
      res.json({
        user: user,
        token: token,
      });
    } else {
      res.json({
        user: "The password You Entered is incorrect",
        state: "pi",
      });
    }
    console.log(
      user.password == password,
      typeof user.password,
      typeof password,
      user.password,
      password
    );

    user && console.log(email, password, user.email);
  } else {
    res.json({
      user: "no user please consider to register it " + email,
      state: "nu",
    });
  }
});

module.exports = router;
