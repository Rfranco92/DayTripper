import React from "react";
import "./Btn-Row.css";

const BtnRow = props =>

<div className="row">
      <div className="col-lg-4">
      	<img className="img-circle" src="https://vignette.wikia.nocookie.net/cnc/images/3/36/Earth.jpg/revision/latest?cb=20160630070919" alt="placeholder" width="140" height="140">
      	</img>
			<h2>Travel</h2>
			<p>Driving to your destination and need some stops along the way to maximize your experience during your trip? We can do that! With Day Tripper you can see locations on the way down to your destination and use your time efficiently.</p>
      
      </div>
      <div className="col-lg-4">
      	<img className="img-circle" src="http://www.ayto-navacerrada.org/wp-content/uploads/2017/08/hotels-narrandera-nsw.jpg" alt="placeholder" width="140" height="140">
      	</img>
			<h2>Hotels</h2>
			<p>Traveling down and need a hotel for the night? We can help you find a hotel on your path down. Pick by location or price to best accomodate your needs.</p>
      
      </div>
      	<div className="col-lg-4">
      	<img className="img-circle" src="https://untappedcities-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/top-image-nomad-african-restaurants-lower-east-side-NYC-Untapped-Cities.jpg" alt="placeholder" width="140" height="140">
      	</img>
			<h2>Restaurants</h2>
			<p>Looking for restaurants in the area? Maybe a quick bite to eat while you're on your way to your destination? Use our restaurant finder and see points of interest on your way down.</p>
      
      </div>
</div>

export default BtnRow;