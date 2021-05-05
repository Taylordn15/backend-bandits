const fetch = require("node-fetch");

const getRestaurants = async () => {
	// -- Fetch Restaurant Data -- //
	const getRestaurantData = await fetch(
		"https://api.yelp.com/v3/businesses/search?term=food&location=Atlanta",
		{
			method: "GET",
			headers: {
				Authorization:
					"Bearer KBMAS_tznmWcmtlKTyItZ4WLCNLdqZZUAiQLZSxQqsvMXe4bIKS_sqWowkrwOsiyGiJAYOuZecNNosfcsEcthEGVfhJ8au2S0NNY5fjnzXmotccTfaxZTDTIXT2QYHYx",
			},
		}
	);
	const restaurantDataJson = await getRestaurantData.json();
	const bodySpec = restaurantDataJson[0].businesses.name;
	console.log(restaurantDataJson);
};
console.log(getRestaurants());

module.exports = yelpinfo;
