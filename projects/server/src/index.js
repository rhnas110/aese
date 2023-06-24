require("dotenv/config");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;

const cors = require("cors");
const { database } = require("./config/db");
const bearerToken = require("express-bearer-token");

app.use(express.json());
app.use(cors());
app.use(bearerToken());

// start routes api
app.get("/api", (_, res) => {
  return res.json(`aese API`);
});

const { auth } = require("./routes");
app.use(auth);

// not found api
app.use((_, res) => {
  res.status(404).json({ success: false, error: "Not Found" });
});
// end of not found api
// end routes api

app.listen(PORT, (error) => {
  if (error) {
    console.log(`ERROR: ${error}`);
  } else {
    console.log("aese running at " + PORT);

    // synchronization database
    // database.sequelize.sync({ force: true });
    // database.sequelize.sync({ alter: true });
  }
});
