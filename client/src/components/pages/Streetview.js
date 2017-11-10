import StreetMap from "../Maps/StreetMap";
import API from "../../utils/API";
import React, { Component } from "react";

class Streetview extends Component{

	constructor(props) { 
  	super(props);
  	this.state = {
    endLong: "",
    endLat: "",
    isTrips: false
  	}
  	}


  	 componentDidMount() {
   	API.getOneTrip(this.props.match.params.id).then(response => {
   		console.log(response)

   	      this.setState({ 
          isTrips: true,
          endLong: response.data[0].endLat.lng,
          endLat: response.data[0].endLat.lat
        })
        })
        .catch(err => console.log(err));
  	}

	render()

	    {

	    	if(this.state.endLat.length === 0) return null
		return(

			<StreetMap
			endLat={this.state.endLat} endLong={this.state.endLong}
			/> 
		)
	}

}


export default Streetview