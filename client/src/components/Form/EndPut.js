import React from "react";
import "./EndPut.css";

export const EndPut = props =>
  <div className="form-group">
    <input className="form-control" formmethod="post" placeholder= "Ending Address"{...props} />
    <input className="form-control" formmethod="post" placeholder= "End Time"{...props} />
    <input className="form-control" formmethod="post" placeholder= "something else"{...props} />
    <input className="form-control" formmethod="post" placeholder= "something else"{...props} />
  </div>;
