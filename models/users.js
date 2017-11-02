const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({


});

const User = mongoose.model("User", usersSchema);


module.exports = User;