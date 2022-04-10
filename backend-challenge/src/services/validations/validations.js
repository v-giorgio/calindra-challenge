const { body } = require("express-validator");

const validateAllLocations = () => {
  return [
    body("addresses.*.street")
      .exists()
      .withMessage("Campo `street` é obrigatório"),
    body("addresses.*.number")
      .exists()
      .withMessage("Campo `number` é obrigatório"),
    body("addresses.*.neighborhood")
      .exists()
      .withMessage("Campo `neighborhood` é obrigatório"),
    body("addresses.*.city").exists().withMessage("Campo `city` é obrigatório"),
    body("addresses.*.state")
      .exists()
      .withMessage("Campo `state` é obrigatório"),
    body("addresses.*.zipcode")
      .exists()
      .withMessage("Campo `zipcode` é obrigatório"),
  ];
};

const validateCurrentLocation = () => {
  return [
    ...validateAllLocations(),
    body("current_location.street")
      .exists()
      .withMessage("Campo `street` é obrigatório"),
    body("current_location.number")
      .exists()
      .withMessage("Campo `number` é obrigatório"),
    body("current_location.neighborhood")
      .exists()
      .withMessage("Campo `neighborhood` é obrigatório"),
    body("current_location.city")
      .exists()
      .withMessage("Campo `city` é obrigatório"),
    body("current_location.state")
      .exists()
      .withMessage("Campo `state` é obrigatório"),
    body("current_location.zipcode")
      .exists()
      .withMessage("Campo `zipcode` é obrigatório"),
  ];
};

module.exports = { validateAllLocations, validateCurrentLocation };
