import axios from "axios";

export default {
  // Saves a book to the database
  saveBook: function(tripData) {
    return axios.post("/api/trips", tripData);
  }
};
