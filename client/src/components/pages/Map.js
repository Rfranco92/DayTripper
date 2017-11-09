import React, { Component } from "react";
import MapWithADirectionsRenderer from "../Maps/supermap"
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class MyFancyComponent extends React.PureComponent {
  constructor(props) { 
  super(props);
  console.log(this);
  console.log(props);
  this.state = {
    name: this.props.user.local.username,
    trips: [],
    isTrips: false
  }

  console.log(this.state);
 }
  componentDidMount() {



   API.getTrip(this.state.name).then(response => {
          this.setState({ 
          isTrips: true,
          trips: response.data
        })
        })
        .catch(err => console.log(err));
  }

  render() {
    return ( 
      <Container fluid>
      {this.state.trips.length ? (
        <List>
        {this.state.trips.map(trip => (
          <ListItem key={trip._id}>
            <Link to={"/maps/" + trip._id}>
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
        </List>

        )

      : (

        <h1>You do not have any trips available</h1>
        )}
    </Container>


    )
  }
}


export default MyFancyComponent