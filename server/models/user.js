var mongoose = require("mongoose");

const Schema = mongoose.Schema;
const User = new Schema({
  email: {
    type: String,
    required: true,
    minlength: [8, "Email should not be less than 8 characters!"],
    maxlength: [100, "Email should not be more than 100 characters!"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password should not be less than 8 characters!"],
    maxlength: [256, "Password should not be more than 256 characters!"],
  },
});
const user = mongoose.model("users", User);

module.exports = user;
