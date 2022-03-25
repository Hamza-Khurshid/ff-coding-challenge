const mongoose = require("mongoose");

function dbConnection() {
  mongoose.connect(
    process.env.MONGOOSE_CONNECTION_STR,
    { useNewUrlParser: true },
    function (err) {
      if (err) {
        console.log("err connecting db: ", err);
      } else {
        console.log("db successfully connected");
      }
    }
  );
}

module.exports = dbConnection;
