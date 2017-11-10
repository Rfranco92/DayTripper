import React from "react";
import { Link, Route } from "react-router-dom";
import { Input, TextArea, FormBtn, EndPut } from "../../components/Form";
import FooterBar from "../../components/FooterBar";
import "./Travel.css"



const Travel = props =>{

console.log(props.user)
return(
  <div>
  	<div className="backer">
    	<h1 className="assHole">Plan Your Trip</h1>
    </div>
    <Input user={props.user}>

    </Input>

    <FooterBar>
    </FooterBar>

</div>
)
}

export default Travel;