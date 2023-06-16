const jwt = require("jsonwebtoken");

exports.CookieWAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]; // Extract the token from the request headers

  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "Unauthorized",
      redirect: "/login",
    });
  }

  try {
    const user = jwt.verify(token, "HelLOwOrLd");

    if (!user) {
      res.send({
        status: 401,
        message: "Unauthorized",
      });
      res.clearCookie("token");
    }

    next();
  } catch (err) {
    res.send({
      status: 401,
      message: "Unauthorized",
    });
    res.clearCookie("token");
  }
};
