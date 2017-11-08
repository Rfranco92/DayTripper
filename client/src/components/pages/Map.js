import React, { Component } from "react";
import MapWithADirectionsRenderer from "../Maps/supermap"
class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
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