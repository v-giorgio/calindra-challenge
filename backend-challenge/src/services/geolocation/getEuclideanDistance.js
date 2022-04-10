const GREAT_DISTANCE = 1_000_000_000_000;

const getEuclideanDistance = (startCoords, endCoords) => {
  const distance = Math.sqrt(
    (startCoords.latitude - endCoords.latitude) ** 2 +
      (startCoords.longitude - endCoords.longitude) ** 2
  );

  return distance;
};

const getAllDistances = (coords) => {
  let distances = {};

  for (let i = 0; i < coords.length; i++) {
    if (i + 1 === coords.length) {
      break;
    }
    for (let j = i + 1; j < coords.length; j++) {
      distances[`distance_${[i]}_and_${[j]}`] = {
        address_1: coords[i].address,
        address_2: coords[j].address,
        distance: getEuclideanDistance(coords[i], coords[j]),
      };
    }
  }

  return distances;
};

const getClosestLocations = (coords, currentLocation) => {
  const locations = coords.map((coordsData) => {
    return {
      address: coordsData.address,
      distance_to_current: getEuclideanDistance(coordsData, currentLocation),
    };
  });

  const closest = {
    address: "",
    distance: GREAT_DISTANCE,
  };
  const furthest = {
    address: "",
    distance: 0,
  };

  for (let i = 0; i < locations.length; i++) {
    if (locations[i].distance_to_current < closest.distance) {
      closest.address = locations[i].address;
      closest.distance = locations[i].distance_to_current;
    }

    if (locations[i].distance_to_current > furthest.distance) {
      furthest.address = locations[i].address;
      furthest.distance = locations[i].distance_to_current;
    }
  }

  return {
    distances_to_current: locations,
    closest_location: closest,
    furthest_location: furthest,
  };
};

module.exports = {
  getAllDistances,
  getClosestLocations,
};
