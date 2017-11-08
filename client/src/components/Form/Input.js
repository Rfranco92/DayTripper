import React from "react";
import "./Input.css";
import Submit from "../Submit"

export const Input = props =>
  <div className="form-group">
    <input className="form-control" formMethod="post" placeholder= "Starting Address (Your Location, Be Specific)"{...props} />
    <input className="form-control" formMethod="post" placeholder= "Starting Time, Example: 7:00 AM"{...props} />
    <input className="form-control" formMethod="post" placeholder= "Starting Date MM/DD/YYYY"{...props} />
    <input className="form-control" formMethod="post" placeholder= "Number of People Doing This Trip"{...props} />
  </div>;
