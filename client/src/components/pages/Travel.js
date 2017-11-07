import React from "react";

import Details from "./Details";
import { Link, Route } from "react-router-dom";
import { Input, TextArea, FormBtn, EndPut } from "../../components/Form";


const Travel = props =>
  <div>
    <h1>Starting Location Details</h1>


    <Input>
    </Input>

    <EndPut>
    </EndPut>


	<Link to={`${props.match.url}/details`} className="btn btn-default">
  	Details
	</Link>{" "}
	<Link to="/travel" className="btn btn-default">
	Collapse
	</Link>
	<Route exact path={`${props.match.url}/details`} component={Details} />



</div>;

export default Travel;