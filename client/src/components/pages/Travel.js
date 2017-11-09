import React from "react";
import { Link, Route } from "react-router-dom";
import { Input, TextArea, FormBtn, EndPut } from "../../components/Form";
import FooterBar from "../../components/FooterBar";



const Travel = props =>{

console.log(props.user)
return(
  <div>
    <h1>Plan Your Location</h1>
    <Input user={props.user}>
    </Input>

    <FooterBar>
    </FooterBar>

</div>
)
}

export default Travel;