const router = require("express").Router();
const authRoutes = require("./api/login");
const apiRoutes = require("./api/trips")

// API Routes
router.use("/auth", authRoutes);

router.use("/api", apiRoutes);



module.exports = router;