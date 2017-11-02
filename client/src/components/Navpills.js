import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Log In</Link>
    </li>
    <li className={window.location.pathname === "/create" ? "active" : ""}>
      <Link to="/create">Create an Account</Link>
    </li>
  </ul>;

export default Navpills;