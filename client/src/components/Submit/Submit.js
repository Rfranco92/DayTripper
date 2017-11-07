import React from "react";


const Submit = props =>
	<button
		onClick={props.onclick}
		className={`submit-btn ${props["data-value"]}`}
		{...props}
		>
	</button>	



export default Submit