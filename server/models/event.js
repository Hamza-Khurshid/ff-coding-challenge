var mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Event = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: [256, "Title should not be more than 256 characters!"],
  },
  description: {
    type: String,
    required: false,
    maxlength: [256, "Description should not be more than 256 characters!"],
  },
  category: {
    type: String,
    required: true,
    maxlength: [100, "Category should not be more than 100 characters!"],
  },
  date: {
    type: Date,
    required: true,
  },
  isVirtual: {
    type: Boolean,
    required: true,
  },
  address: {
    type: String,
    required: true,
    maxlength: [256, "Address should not be more than 256 characters!"],
  },
});
const event = mongoose.model("events", Event);

module.exports = event;
