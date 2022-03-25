const app = require("express").Router();
const verifyAuth = require("../middlewares/verifytoken");
const { addEvent, listEvents } = require("../controllers/event");

// Get list of events
app.get("/", listEvents);

// Create new event
app.post("/add", verifyAuth, addEvent);

module.exports = app;
