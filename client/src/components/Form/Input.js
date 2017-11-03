import React from "react";
import "./Input.css";

export const Input = props =>
  <div className="form-group">
    <input className="form-control" formmethod="post" placeholder= "Starting Address"{...props} />
    <input className="form-control" formmethod="post" placeholder= "Starting Time"{...props} />
    <input className="form-control" formmethod="post" placeholder= "something else"{...props} />
    <input className="form-control" formmethod="post" placeholder= "something else"{...props} />
  </div>;
