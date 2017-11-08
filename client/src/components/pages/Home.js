import React from "react";
import BtnRow from "../../components/BtnRow";
import { Link, Route } from "react-router-dom";
import MyMapComponent from "../Maps/supermap";

const Home = () =>
<container>

<MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%`, width: `100%` }} />}
/>

  <BtnRow>
  </BtnRow>

</container>  

export default Home
