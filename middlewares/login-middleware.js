const Register = require("../features/database");

let loginmiddleware = async (req, res) => {
  const { username, password } = req.body;
  let previoususer = await Register.findOne({ username: username });

  if (previoususer) {
    if (previoususer.password == password) {
      res.json({
        msg: "ok",
      });
    } else {
      res.json({
        msg: "notok",
      });
    }
  } else {
    res.json({
      msg: "nouser",
    });
  }
};
