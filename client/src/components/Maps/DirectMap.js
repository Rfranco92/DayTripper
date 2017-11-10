import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps"
// import "../../BtnRow";

const google = window.google

const MapWithADirectionsRenderer = compose(

  withProps( {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      var startLat = this.props.startLat
      var startLong = this.props.startLong
      var endLat = this.props.endLat
      var endLong = this.props.endLong


      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
        origin: new google.maps.LatLng(startLat, startLong),
        destination: new google.maps.LatLng(endLat, endLong),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        
          console.log(this.state);
        } else {
          console.error(`error fetching directions ${result}`)
          console.log(this.state);
        }
      });
    }
  })
)(props =>
  <container>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(34.0928, 118.3287)}

  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>


  </container>

);


export default  MapWithADirectionsRenderer
