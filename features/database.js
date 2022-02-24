const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://client:client321@cluster0.dsjdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .catch((err) => {
    console.log(err);
  })
  .then(console.log("connected successfully.. "));
// schema
let Users = mongoose.Schema;
const register = new Users({
  fullname: String, // String is shorthand for {type: String}
  username: String,
  email: String,
  password: String,
  bdate: String,
  confirmpassword: String,
  image: String,
  verified: Number,
});

// rigistration middleware
let diiwaan = mongoose.model("Register", register);

module.exports = diiwaan;
