import React, { Component } from "react";
import MapWithADirectionsRenderer from "../Maps/supermap"
import API from "../../utils/API";

class MyFancyComponent extends React.PureComponent {
  constructor(props) { 
  super(props);

  console.log(props);
  this.state = {
    name: props.user.local.username,
    isTrips: false
  }

  console.log(this.state);
 }
  componentDidMount() {
    this.delayedShowMarker()

   API.getTrip(this.state.name).then(response => {
        console.log(response)
        if (response.status === 200) {
          isTrips: true
        }
      });
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }
  render() {
    return ( 
    <MapWithADirectionsRenderer />
    )
  }
}


export default MyFancyComponent