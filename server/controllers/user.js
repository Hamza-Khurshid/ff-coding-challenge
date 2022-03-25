const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { generateAuthToken } = require("../services/token");

const login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec(function (err, user) {
    if (err) {
      return res.json({
        err,
        status: false,
        message: err?.message || "Something went wrong on our server.",
      });
    }

    if (user && bcrypt.compareSync(password, user.password)) {
      res.json({ token: generateAuthToken(user), status: true });
    } else {
      res.statusCode = 401;
      res.json({ status: false, message: "Incorrect credentials." });
    }
  });
};
const signup = (req, res) => {
  const { email, password } = req.body;

  res.json({ message: "signup", email, password });
};

module.exports = {
  login,
  signup,
};
