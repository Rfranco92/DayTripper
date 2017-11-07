const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
	startlocation: { type: String, required: true },
	endlocation: { type: String, required: true},
	startDate: Date,
	endDate: Date,
	currentDate: {type: Date, default: Date.now }

});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;

