
const express = require('express')
const router = express.Router()
const Destination = require('../../models/destination')
const tripRoutes = require("./trips");


router
	.route("/trips")
	.post(tripsController.create)

	console.log("here we are");

router.post("/createtrip", function (req, res){
	
})

module.exports = router;
