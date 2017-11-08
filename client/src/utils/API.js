import axios from "axios";

export default {
  getTrip: function() {
    return axios.get("/api/trips");
  },
  // Deletes the trip with the given id
  deleteTrip: function(id) {
    return axios.delete("/api/trips/" + id);
  },
  // Saves a trip to the database
