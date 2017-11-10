import React, { Component } from "react";
import MapWithADirectionsRenderer from "../Maps/supermap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import "./Trips.css";
import FooterBar from "../../components/FooterBar"

class MyFancyComponent extends React.PureComponent {
  constructor(props) { 
  super(props);
  this.state = {
    name: "",
    trips: [],
    isTrips: false
  }

  console.log(this.state);
 }
  componentDidMount() {

   API.getTrip(this.props.match.params.username).then(response => {
          this.setState({ 
          isTrips: true,
          trips: response.data
        })
          console.log(response.data);
        })
        .catch(err => console.log(err));
  }

  render() {
    return ( 
<container>      

      <div className="col-lg-9 col-lg-offset-1">
      {this.state.trips.length ? (
        <ul className="black">
        {this.state.trips.map(trip => (
          <div key={trip._id} className="blackli" >
            <Link to={"/maps/" + trip._id} className="blackli" >
            <strong>
              Trip from {trip.startAdd} to {trip.endAdd} 
              <br></br>
              Starts: {trip.startDate}
              <br></br> 
              Ends: {trip.endDate}
            </strong>
            </Link>
          </div>

          ))}
        </ul>

        )

      : (

        <h1 className="empty">You do not have any trips available</h1>
        )}

  


    </div>

<FooterBar>      
</FooterBar>

</container>

    )
  }
}


export default MyFancyComponent