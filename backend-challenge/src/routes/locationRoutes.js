const { Router } = require("express");
const {
  getDistances,
  getNearbyLocations,
} = require("../controllers/locationController");
const {
  validateAllLocations,
  validateCurrentLocation,
} = require("../services/validations/validations");

const locationRouter = Router();

locationRouter.post("/location", validateAllLocations(), getDistances);

locationRouter.post(
  "/location_nearby",
  validateCurrentLocation(),
  getNearbyLocations
);

module.exports = locationRouter;
