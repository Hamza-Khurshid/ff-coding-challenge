var router = require("express").Router();

const userRoutes = require("./user");
const eventRoutes = require("./event");

router.use("/users", userRoutes);
router.use("/events", eventRoutes);

module.exports = router;
