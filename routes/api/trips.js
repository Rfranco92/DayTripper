
const express = require('express')
const router = express.Router()
const trips = require('../../models/trip')

const tripsController = require("../../controllers/tripsController");



router.post("/createtrip", function (req, res){
	trips
    .create(req.body)
    .then(function(tripdata) {
	res.json(tripdata);
		})
})



router.get("/trips/:owner", function(req, res){
	trips
	.find({owner: req.params.owner})
  	.then(function(tripdata) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      console.log("Found Your Trips!");
      res.json(tripdata);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
})


module.exports = router;
