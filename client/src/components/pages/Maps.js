import MapWithADirectionsRenderer from "../Maps/supermap";
import API from "../../utils/API";
import React, { Component } from "react";

class Maps extends Component{
	constructor(props) { 
  	super(props);
  	this.state = {
    startLong: "",
    startLat: "",
    endLong: "",
    endLat: "",
    trips: [],
    isTrips: false
  	}
  	}

  	 componentDidMount() {

   	API.getOneTrip(this.props.match.params._id).then(response => {
          this.setState({ 
          isTrips: true,
          endLong: response.data[0].endLat.lng,
          endLat: response.data[0].endLat.lat,
          startLong: response.data[0].startLat.lng,
          startLat: response.data[0].startLat.lat
        })
        })
        .catch(err => console.log(err));
  	}

	render(){
		return(

			<MapWithADirectionsRenderer startLat={this.state.startLat} startLong={this.state.startLong} 
			endLat={this.state.endLat} endLong={this.state.endLong}
			/> 
		)
	}

}


export default Maps