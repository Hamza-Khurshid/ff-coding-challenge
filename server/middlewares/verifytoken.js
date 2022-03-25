const User = require("../models/user");
const { verifyAuthToken } = require("../services/token");

const verifyByToken = async (req, res, next) => {
  let token =
    req.header("authorization") && req.header("authorization").split(" ")[1];

  try {
    if (token && token !== "") {
      verifyAuthToken(token, async function (err, decoded) {
        if (decoded) {
          const user = await User.findById(decoded.id);
          if (user) {
            next();
          } else {
            res.status(401).send("Unautherized, please login!");
            next();
          }
        }

        if (err) {
          res.status(500).send("Server internal error:" + err);
        }
      });
    } else {
      // res.statusCode = 401;
      res
        .status(401)
        .send({ message: "Unautherized. Please add token.", status: false });
    }
  } catch (err) {
    res.status(404).send("Error:" + err);
  }
};

module.exports = verifyByToken;
