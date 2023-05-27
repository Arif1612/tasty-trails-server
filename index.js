const express = require("express");
const app = express();
const port = 5005;

const chefs = require("./data/chefs.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.listen(port, () => {
  console.log(`Tasty Trails API is running on ${port}`);
});
