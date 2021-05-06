const fetch = require("node-fetch");

const addRestaurants = async () => {
	// -- Fetch Restaurant Data -- //

	const getRestaurantData = await fetch(
		"https://api.yelp.com/v3/businesses/search?term=food&location=Atlanta&limit=5",
		{
			method: "GET",
			headers: {
				Authorization:
					"Bearer KBMAS_tznmWcmtlKTyItZ4WLCNLdqZZUAiQLZSxQqsvMXe4bIKS_sqWowkrwOsiyGiJAYOuZecNNosfcsEcthEGVfhJ8au2S0NNY5fjnzXmotccTfaxZTDTIXT2QYHYx",
			},
		}
	);
	const restaurantDataJson = await getRestaurantData.json();
	const restaurantName = restaurantDataJson.businesses[0].name;
	const restaurantAddress1 = restaurantDataJson.businesses[0].location.address1;
	const restaurantCity = restaurantDataJson.businesses[0].location.city;
	const restaurantZip = restaurantDataJson.businesses[0].location.zip_code;
};
console.log(addRestaurants());

module.exports = yelpinfo;
