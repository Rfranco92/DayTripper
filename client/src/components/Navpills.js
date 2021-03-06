import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./Navpills.css"

const Navpills = props => { 
	if (props.loggedIn) {
		return (
			<ul className="nav nav-tabs">
				<li className={window.location.pathname ===`/trips/${props.user.local.username}` ?  "active" : ""}>
					<Link to = {`/trips/${props.user.local.username}`}>
					Your Trips
					</Link>
				</li>

				<li className={window.location.pathname ==="/members" ?  "active" : ""}>
					<Link to ="/members">
					List of Members
					</Link>
				</li>

				<li className={window.location.pathname ==="/travel" ?  "active" : ""}>
					<Link to ="/travel">
					Plan a New Trip
					</Link>
				</li>
				<li>
					<Link to="/" className="nav-link" onClick={props._logout}>
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