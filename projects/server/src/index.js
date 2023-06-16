require("dotenv/config");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;

const cors = require("cors");
const db = require("./models");

app.use(cors());

app.get("/api", (req, res) => {
  return res.send(`aese API`);
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(`ERROR: ${error}`);
  } else {
    console.log("aese running at " + PORT);
    // db.sequ
  }
});
