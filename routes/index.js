const path = require("path");
const router = require("express").Router();
const authRoutes = require("./api/login");
const apiRoutes = require("./api/trips")

// API Routes
router.use("/auth", authRoutes);

router.use("/api", apiRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../build/static/index.html"));
});

module.exports = router;