import axios from "axios";

export default {
  // Saves a book to the database
  saveTrip: function(tripData) {
    return axios.post("/api/trips", tripData);
  }
};
