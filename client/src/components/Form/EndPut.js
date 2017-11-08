import React from "react";
import "./EndPut.css";
import Submit from "../Submit"

export const EndPut = props =>
  <div className="form-group">
    <input className="form-control" formMethod="post" placeholder= "Location of Where You Want To Visit"{...props} />
    <input className="form-control" formMethod="post" placeholder= "End Time, IE: 8:00 PM"{...props} />
    <input className="form-control" formMethod="post" placeholder= "End Date: MM/DD/YYYY"{...props} />
    <input className="form-control" formMethod="post" placeholder= "Number of Stops You Want to Do"{...props} />
    <Submit>Submit</Submit>
  </div>;
