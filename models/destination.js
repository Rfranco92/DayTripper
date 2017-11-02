const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
	start: { type: String, required: true },
	end: { type: String, required: true},
	startDate: Date,
	endDate: Date,
	currentDate: {type: Date, default: Date.now }

});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;

