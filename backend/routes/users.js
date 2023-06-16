var express = require("express");
const { createUser } = require("../controllers/createUser");
const { loginUser } = require("../controllers/loginUser");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// Create account
router.post("/create-account", createUser);
// login account
router.post("/login",loginUser);
module.exports = router;
