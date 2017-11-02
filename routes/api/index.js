const router = require("express").Router();
const bookRoutes = require("./trips");

// Book routes
router.use("/trips", bookRoutes);

module.exports = router;