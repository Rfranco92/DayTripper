import React from "react";
import "./Input.css";
import Submit from "../Submit"

export const Input = props =>
  <div className="form-group">
    <input className="form-control" formMethod="post" placeholder= "Starting Address"{...props} />
    <input className="form-control" formMethod="post" placeholder= "Starting Time"{...props} />
    <input className="form-control" formMethod="post" placeholder= "something else"{...props} />
    <input className="form-control" formMethod="post" placeholder= "something else"{...props} />
  	<Submit>Submit</Submit>

  </div>;
