var express = require("express");
var router = express.Router();


exports.Home = (req, res) => {
  return res.redirect("/homepage");
};

module.exports = router;
