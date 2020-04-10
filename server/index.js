require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const { getHouses, addToHouses } = require("./controller");

massive(CONNECTION_STRING).then((dbInstance) => {
  app.set("db", dbInstance);
  console.log("db connected");
});

app.use(express.json());

app.get("/api/houses", getHouses);
app.post("/api/houses", addToHouses);

app.listen(SERVER_PORT, () =>
  console.log(`Big Bro listening port ${SERVER_PORT}`)
);
