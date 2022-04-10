const { getGeolocation } = require("../services/geolocation/getGeolocation");
const { validationResult } = require("express-validator");

const {
  getAllDistances,
  getClosestLocations,
} = require("../services/geolocation/getEuclideanDistance");

/* get distances between every location */
const getDistances = async (req, res) => {
  const locationData = req.body.addresses;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const coords = await Promise.all(
      locationData.map(async (location) => {
        return await getGeolocation(location);
      })
    );

    const distances = getAllDistances(coords);

    return res.status(200).json(distances);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

/* get distances between every location and the current one */
const getNearbyLocations = async (req, res) => {
  const locationData = req.body.addresses;
  const currentLocationData = req.body.current_location;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const coords = await Promise.all(
      locationData.map(async (location) => {
        return await getGeolocation(location);
      })
    );

    const currentLocation = await getGeolocation(currentLocationData);

    const distances = getClosestLocations(coords, currentLocation);

    return res.status(200).json(distances);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

module.exports = { getDistances, getNearbyLocations };
