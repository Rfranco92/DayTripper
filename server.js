const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');
const path = require("path");
const session = require('express-session');
const passport = require('./passport')
const MongoStore = require('connect-mongo')(session)
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
// Add routes, both API and view

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
MONGO_URL =  process.env.MONGODB_URI || "mongodb://localhost/tripper"
mongoose.connect(
  MONGO_URL,
  {
    useMongoClient: true
  }
);


const db = mongoose.connection
db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database: ${MONGO_URL}`
	)
})

app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: db }),
		resave: false,
		saveUninitialized: false
	})
)
app.use(passport.initialize());
app.use(passport.session());

const routes = require("./routes");
app.use(routes);

app.use("/static", express.static(path.join(__dirname, "./client/build/index.html")));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'))
});



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});