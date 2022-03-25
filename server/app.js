//import nodemodule
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

//import from custom files
const dbConnection = require("./config/dbConnection");
const routes = require("./routes/index");

//add middleware
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure environment variables
require("dotenv").config({ path: "../.env" });

//db connection
dbConnection();

// application routes
app.use("/api/v1", routes);

app.get("/health", (req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, function () {
  console.log(`express server running on port ${PORT}`);
});
