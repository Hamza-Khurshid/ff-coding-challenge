var jwt = require("jsonwebtoken");

const generateAuthToken = (user) => {
  const token = jwt.sign(
    { id: user._id }, // data
    process.env.JWT_SECRET_KEY, // Secret
    { expiresIn: "1 days" } // expiration duration
  );
  return token;
};

const verifyAuthToken = (token, callback) => {
  jwt.verify(token, process.env.JWT_SECRET_KEY, callback);
};

module.exports = {
  verifyAuthToken,
  generateAuthToken,
};
