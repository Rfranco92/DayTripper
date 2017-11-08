import axios from "axios";

export default {
  getTrips: function() {
    return axios.get("/api/trips");
  },
  // Saves a book to the database
  saveTrip: function(tripData) {
    return axios.post("/api/trips", tripData);
  }
};
