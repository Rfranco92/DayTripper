const db = require("../models");

module.exports = {
create: function(req, res) {
    db.Trip
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};