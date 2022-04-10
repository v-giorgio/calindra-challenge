const express = require("express");
require("dotenv").config();
// const routes = require("./routes");
const cors = require("cors");

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json());

// routes(app);

app.listen(port, () => {
  try {
    console.log(`Api running on ${port}`);
  } catch (e) {
    console.log(`Failed to run API:\n\n ${e}`);
  }
});

module.exports = app;
