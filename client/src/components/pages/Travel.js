import React from "react";
import Submit from "../../components/Submit";
import BtnRow from "../../components/BtnRow";
import Details from "./Details";
import { Link, Route } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../../components/Form";


const Travel = props =>
  <div>
    <h1>Starting Location Details</h1>
    <Input>
    </Input>

    <BtnRow>
   	</BtnRow>

   	



<Link to={`${props.match.url}/details`} className="btn btn-default">
  ENHANCE!
</Link>{" "}
<Route exact path={`${props.match.url}/details`} component={Details} />



  </div>;

export default Travel;