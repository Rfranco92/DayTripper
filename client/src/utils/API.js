import axios from "axios";

export default {
  getTrip: function(username) {
    return axios.get("/api/trips/" + username);
  },
  deleteTrip: function(id) {
    return axios.delete("/api/trips/" + id);
  },
  createTrip: function(obj){

  	console.log(obj)
  	return axios.post('/api/createtrip', {
        owner: obj.name,
        startAdd: obj.startaddress,
        startLat: obj.geocodeResults1,
        endAdd: obj.endaddress,
        endLat: obj.geocodeResults2,
        startDate: obj.start,
        endDate: obj.end
      });
  },

  getOneTrip: function(id){
    return axios.get("/api/trip/" + id)
  }
};