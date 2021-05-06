// const express = require("express");
// const app = express();
// const { createClient } = require("@supabase/supabase-js");
// const supabase = createClient(
// 	"https://qaozkethcihyhwxqwyyb.supabase.co",
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDA2NTU3NSwiZXhwIjoxOTM1NjQxNTc1fQ.HIBZbZyYMY7Jc1d4kxYVkESzL55qG7RqMPMzoWA1oFI"
// );

// app.post("/reservations", (req, res) => {
// 	const { Name, date, restaurant, partysize } = res.body;
// 	console.log("post request");
// });

// const fetch = require("node-fetch");

// const addRestaurants = async () => {
// 	// -- Fetch Restaurant Data -- //

// 	const getRestaurantData = await fetch(
// 		"https://api.yelp.com/v3/businesses/search?term=food&location=Atlanta&limit=5",
// 		{
// 			method: "GET",
// 			headers: {
// 				Authorization:
// 					"Bearer KBMAS_tznmWcmtlKTyItZ4WLCNLdqZZUAiQLZSxQqsvMXe4bIKS_sqWowkrwOsiyGiJAYOuZecNNosfcsEcthEGVfhJ8au2S0NNY5fjnzXmotccTfaxZTDTIXT2QYHYx",
// 			},
// 		}
// 	);
// 	const restaurantDataJson = await getRestaurantData.json();
// 	const restaurantName = restaurantDataJson.businesses[0].name;
// 	const restaurantAddress1 = restaurantDataJson.businesses[0].location.address1;
// 	const restaurantCity = restaurantDataJson.businesses[0].location.city;
// 	const restaurantZip = restaurantDataJson.businesses[0].location.zip_code;
// };
// console.log(addRestaurants());

// module.exports = yelpinfo;

{
	/* <div id="reservation-section">
				<h3>Current Reservations</h3>
				<div id="reservation-history">
					
					<div id ="single-reservation">
						${reservations.map(reservation =>
							`
							<p>Restaurant Name:</p>
							<dt>${restaurant.name}</dt>
							<p>Date:</p>
							<dt>${reservation.date}</dt>
							<p>Time:</p>
							<dt>${reservation.time}</dt>
							<p>Party Size:</p>
							<dt>${reservation.party}</dt>
							`
						).join("")}
						<button>Edit</button>
						<button>Delete</button>
					</div>
				</div>
				</div> */
}
