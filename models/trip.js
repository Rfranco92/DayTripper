const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
	owner: {type: String, required: true},
	startAdd: {type: String, required: true},
	startLat: { type: Object, required: true},
	endAdd: {type: String, required: true},
	endLat: { type: Object, required: true},
	startDate: Date,
	endDate: Date,
	currentDate: {type: Date, default: Date.now }
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;

