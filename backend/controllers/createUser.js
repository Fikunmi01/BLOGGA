const UserModel = require("../models/userModel");

exports.createUser = (req, res, next) => {
  const email = req.body.email;

  UserModel.find({ email }).then((user) => {
    if (user.length > 0) {
      res.send({
        status: 409,
        message: "User already exists",
      });
    } else {
      let newUser = new UserModel({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      newUser
        .save()
        .then(() => console.log("User Created"))
        .catch((err) => console.log(err));

      res.send({
        status: 201,
        message: "User successfully created",
      });
    }
  });
};
