const getEuclideanDistance = (startCoords, endCoords) => {
  const distance = Math.sqrt(
    (startCoords.latitude - endCoords.latitude) ** 2 +
      (startCoords.longitude + endCoords.longitude) ** 2
  );

  return distance;
};

module.exports = {
  getEuclideanDistance,
};
