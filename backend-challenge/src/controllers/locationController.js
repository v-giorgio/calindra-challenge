const {
  getGeolocation,
  getCurrentLocation,
} = require("../services/geolocation/getGeolocation");

const {
  getEuclideanDistance,
} = require("../services/geolocation/getEuclideanDistance");

const getDistances = async (req, res) => {
  const locationData = req.body.addresses;

  console.log(locationData);
};

module.exports = { getDistances };
