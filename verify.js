class checkfield {
  email;
  username;
  fullname;
  password;
  confirmpassword;
  res;
  tuser;
  Register;
  req;
  newperson;
  message;
  image;

  // functions
  verify = () => {
    this.newperson = new this.Register({
      fullname: this.req.body.fullname,
      bdate: this.req.body.bdate,
      email: this.req.body.email,
      image: "",
      verified: 0,
      password: this.req.body.password,
      confirmpassword: this.req.body.confirmpassword,
    });
    if (
      !this.fullname ||
      !this.email ||
      !this.password ||
      !this.confirmpassword
    ) {
      this.res.json({
        msg: "all fields are required",
      });
    } else if (
      this.tuser.length > 0 ||
      !this.fullname ||
      this.fullname.length < 7
    ) {
      this.res.json({
        msg:
          this.tuser.length > 0
            ? "Email already taken"
            : "name must be atleast 7 char",
      });
    } else if (!this.email) {
      this.res.json({
        msg: "email is required",
      });
    } else if (!this.password || this.password !== this.confirmpassword) {
      this.res.json({
        msg: this.password
          ? "passwords should be same"
          : "password field is required",
      });
    } else if (this.password) {
      let b = validatepassword(this.password);
      if (b == 1) {
        this.newperson.save();
        this.res.json({
          msg: this.fullname + " has been registred successfully",
          con: "ok",
        });
      } else if (b == 3) {
        this.res.json({
          msg: "your password should be atleast 6 chars",
        });
      } else {
        this.res.json({
          msg: "your password should containt atleast 3 numbers",
        });
      }
    } else {
      this.newperson.save();
      this.res.json({
        msg: this.fullname + " has been registred successfully",
        con: "ok",
      });
    }
  };
}
const validatepassword = (pass, mes) => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  pass.split();
  let t = 0;
  for (let i = 0; i < pass.length; i++) {
    const element = pass[i];
    if (
      element == 1 ||
      element == 2 ||
      element == 3 ||
      element == 4 ||
      element == 5 ||
      element == 6 ||
      element == 7 ||
      element == 8
    ) {
      t = t + 1;
    }
  }
  if (t < 3) {
    return 0;
  } else if (pass.length < 6) {
    return 3;
  } else {
    return 1;
  }
};
module.exports = checkfield;
