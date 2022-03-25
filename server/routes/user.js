const app = require("express").Router();
const { login, signup } = require("../controllers/user");

app.post("/login", login);
app.post("/register", signup);

module.exports = app;
