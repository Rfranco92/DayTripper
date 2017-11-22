import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, StreetViewPanorama, OverlayView } from "react-google-maps"
import BtnRow from "../../components/BtnRow";
import FooterBar from "../../components/FooterBar";

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
})



const StreetViewPanormaWithAnOverlayView = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAFuV4OzvVu7ZHFDSt7Rrvlc3sZYTW-Viw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 49.2853171, lng: -123.1119202 },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
<container>
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.endLat, lng: props.endLong}}>
    <StreetViewPanorama defaultPosition={{ lat: props.endLat, lng: props.endLong}} visible>
      <OverlayView 
        position={{ lat: props.endLat, lng: props.endLong }}
          mapPaneName={OverlayView.OVERLAY_LAYER}
          getPixelPositionOffset={getPixelPositionOffset}
      >
        <div style={{ background: `red`, color: `white`, padding: 5, borderRadius: `50%` }}>
          OverlayView
        </div>
      </OverlayView>
    </StreetViewPanorama>
  </GoogleMap>
  <FooterBar/>
</container>  
);

export default StreetViewPanormaWithAnOverlayView