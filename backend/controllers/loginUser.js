const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.loginUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  process.env.MY_SECRET = "HelLoWorld";

  UserModel.findOne({ email }).then((user) => {
    if (!user) {
      res.send({
        status: 401,
        message: "No accounts associated with this email",
      });
    } else {
      if (password === user.password) {
        const token = jwt.sign(
          { email: user.email, password: user.password },
          process.env.MY_SECRET,
          { expiresIn: "60s" }
        );

        res.cookie("token", token, {
          httpOnly: true,
          maxAge: 20000,
        });

        res.send({
          status: 200,
          message: "User successfully logged in",
          redirect: '/homepage'
        });
      } else {
        res.send({
          status: 401,
          message: "Incorrect email or password",
        });
      }
    }
  });
};
