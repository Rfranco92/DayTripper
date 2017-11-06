import React from "react";
import { Link } from "react-router-dom";

const Navpills = props => { 
	if (props.loggedIn) {
		return (
			<ul className="nav nav-tabs">
				<li className={window.location.pathname ==="/details" ?  "active" : ""}>
					<Link to ="/details">
					Details
					</Link>
				</li>
				<li className={window.location.pathname ==="/travel" ?  "active" : ""}>
					<Link to ="/travel">
					Travel
					</Link>
				</li>
				<li className="rightStuff">

				</li>
				<li className = "rightStuff">
					<Link to="#" className="nav-link" onClick={props._logout}>
						Logout
					</Link>
				</li>

			</ul>
		)
	} 
	else { 
	return (  
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/login" ? "active" : ""}>
      <Link to="/login">Log In</Link>
    </li>
    <li className={window.location.pathname === "/create" ? "active" : ""}>
      <Link to="/create">Create an Account</Link>
    </li>
  </ul>
  )}
}	
export default Navpills;