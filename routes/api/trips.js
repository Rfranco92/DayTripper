
const express = require('express')
const router = express.Router()
const Destination = require('../../models/destination')
const tripRoutes = require("./trips");

const tripsController = require("../../controllers/tripsController");

router
	.route("/trips")
	.post(tripsController.create)

	console.log("here we are");



module.exports = router;
