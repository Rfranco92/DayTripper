import "./EndPut.css";
import Submit from "../Submit"
import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

export class EndPut extends Component {
	state = {
		address:""

	};

componentDidMount() {
    this.loadTrips();
  }



loadTrips = () => {
    API.getTrips()
      .then(res =>
        this.setState({ address: "" })
      )
      .catch(err => console.log(err));
  };

handleInputChange = event => {
	const { name, value } = event.target;
	this.setState({
		[name]: value
	});
};

handleFormSubmit = event => {
	event.preventDefault();
	if (this.state.address) {
		API.saveTrip({
			address: this.state.address
		})
		.catch(err => console.log(err));
	}
};

render() {
	return (
		
<div className="col-md-6">
  <div className="form-group">
    <input className="form-control" 
    	formMethod="post" 
    	placeholder= "Ending Address"
    	value={this.state.address}
    	onChange={this.handleInputChange}
    	name="address"
    	/>
    <input className="form-control" 
    	formMethod="post" 
    	placeholder= "Ending Time" 
    	/>
    <input className="form-control" 
   		formMethod="post" 
    	placeholder= "something else" 
    	/>
    <input className="form-control" 
    	formMethod="post" 
    	placeholder= "something else" 
    	/>
  	<Submit onClick={this.handleFormSubmit}>Submit</Submit>

  </div>
</div>
		) 
	}
}