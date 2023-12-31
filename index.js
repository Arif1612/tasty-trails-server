const express = require("express");
const app = express();
const port = 5005;
const cors = require("cors");

const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChefs = chefs.find((chef) => parseInt(chef.id) === id);
  res.send(selectedChefs);
});

app.listen(port, () => {
  console.log(`Tasty Trails API is running on ${port}`);
});
