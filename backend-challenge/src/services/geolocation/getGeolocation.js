require("dotenv").config();
const fetch = require("node-fetch-commonjs");
const apiKey = process.env.GEOLOCATION_API_KEY;

/* create the params request to the geolocation api according to the data from the req.body */
const getRequestPattern = async (locationData) => {
  const { street, number, neighborhood, city, state, zipcode } =
    await locationData;

  const address = `${number}+${street.replaceAll(
    " ",
    "+"
  )},+${neighborhood.replaceAll(" ", "+")},+${city.replaceAll(
    " ",
    "+"
  )},+${state},+${zipcode}`;

  return address;
};

const getGeolocation = async (locationData) => {
  const address = await getRequestPattern(locationData);

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
  );

  const geolocationData = await response.json();

  const coords = {
    address: geolocationData.results[0].formatted_address,
    latitude: geolocationData.results[0].geometry.location.lat,
    longitude: geolocationData.results[0].geometry.location.lng,
  };

  return coords;
};

module.exports = {
  getGeolocation,
};

/* const response = getGeolocation({
  street: "Av. Rio Branco",
  number: "1",
  neighborhood: "Centro",
  city: "Rio de Janeiro",
  state: "RJ",
  zipcode: "20090003",
}).then((res) => {
  console.log(res);
}); */
