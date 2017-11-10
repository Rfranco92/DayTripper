import React from "react";
import BtnRow from "../../components/BtnRow";
import { Link, Route } from "react-router-dom";
import CoverMap from "../Maps/CoverMap";

const Home = () =>
<container>

<CoverMap
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

//AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg