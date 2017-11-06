import React from "react";
import "./Submit.css";

const Submit = props =>
	<button
		onclick={props.onclick}
		className={`submit-btn ${props["data-value"]}`}
		{...props}
		>
	</button>	



export default Submit