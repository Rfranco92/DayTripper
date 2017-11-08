import axios from "axios";

export default {
  // Saves a trip to the database
  saveTrip: function(tripData) {
    return axios.post("/api/trips", tripData);
  }
};
