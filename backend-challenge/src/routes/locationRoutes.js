const { Router } = require("express");
const { getDistances } = require("../controllers/locationController");

const locationRouter = Router();

locationRouter.post("/location", getDistances);

module.exports = locationRouter;
