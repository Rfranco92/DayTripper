import React from "react";
import "./EndPut.css";
import Submit from "../Submit"

export const EndPut = props =>
  <div className="form-group">
    <input className="form-control" formMethod="post" placeholder= "Ending Address"{...props} />
    <input className="form-control" formMethod="post" placeholder= "End Time"{...props} />
    <input className="form-control" formMethod="post" placeholder= "something else"{...props} />
    <input className="form-control" formMethod="post" placeholder= "something else"{...props} />
    <Submit>Submit</Submit>
  </div>;
