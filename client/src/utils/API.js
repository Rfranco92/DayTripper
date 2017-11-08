import axios from "axios";

export default {
  getTrip: function() {
    return axios.get("/api/trips");
  },
  deleteTrip: function(id) {
    return axios.delete("/api/trips/" + id);
  }
};  