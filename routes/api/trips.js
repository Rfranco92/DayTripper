const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

router.route("/travel")
	.post(tripsController.create)

module.exports = router;
