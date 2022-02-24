const router = require("express").Router();
const jsw = require("jsonwebtoken");
router.get("/verifyemail/:token", (re, res) => {
  setTimeout(() => {
    res
      .writeHead(301, {
        Location: `http://localhost:3000`,
      })
      .end();
  }, 2000);
});

module.exports = router;
