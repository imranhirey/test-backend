const Register = require("../features/database");
const sendmail = require("../sendmail");
const imran = require("../verify");
const registermiddleware = async (req, res) => {
  let f = new imran();
  f.Register = Register;
  //

  //
  const { fullname, bd, email, password, confirmpassword } = req.body;
  console.log(fullname, bd, email, password, confirmpassword);
  let tuser = await Register.find({ email: email }); //fetching all users from mongodb

  f.tuser = tuser;
  f.fullname = fullname;
  f.email = email;
  f.req = req;
  f.res = res;
  f.password = password;
  f.confirmpassword = confirmpassword;
  f.bdate = bd;
  f.verify();
  sendmail("hkhhkhkjhk", email, "chpalert", user.fullname, "ve");
};

module.exports = registermiddleware;
