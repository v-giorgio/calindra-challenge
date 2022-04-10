const locationRouter = require("./locationRoutes");

module.exports = (app) => {
  app.use(locationRouter);
};
