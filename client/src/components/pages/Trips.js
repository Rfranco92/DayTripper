import React, { Component } from "react";
import MapWithADirectionsRenderer from "../Maps/supermap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import "./Trips.css";

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

      <div className="black">
      {this.state.trips.length ? (
        <ul className="black">
        {this.state.trips.map(trip => (
          <ListItem key={trip._id} className="black" >
            <Link to={"/maps/" + trip._id} className="black" >
            <strong>
              Trip from {trip.startAdd} to {trip.endAdd} 
              <br></br>
              Starts: {trip.startDate}
              <br></br> 
              Ends: {trip.endDate}
            </strong>
            </Link>
            </ListItem>

          ))}
        </ul>

        )

      : (

        <h1 className="empty">You do not have any trips available</h1>
        )}
    </div>


    )
  }
}


export default MyFancyComponent