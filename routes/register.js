const registermiddleware = require("../middlewares/register-middleware");
const router = require("express").Router();

router.post("/register", registermiddleware, (req, res) => {
  //for rigitering new users
});
module.exports = router;
