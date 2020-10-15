const express = require("express"),
  morgan = require("morgan");

const app = express();

let topMovies = [
  {
    title: "The Godfather",
  },
  {
    title: "The Wizard of Oz",
  },
  {
    title: "Citizen Cane",
  },
  {
    title: "The Shawshank Redemption",
  },
  {
    title: "Pulp Fiction",
  },
  {
    title: "Casablanca",
  },
  {
    title: "The Godfather: Part II",
  },
  {
    title: "E.T. The Extra-Terrestrial",
  },
  {
    title: "2001: A Space Odyssey",
  },
  {
    title: "Schindler's List",
  },
];

app.use(morgan("common"));

app.use("/documentation", express.static("public"));

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send("Error!");
});

// GET requests
app.get("/", (_req, res) => {
  res.send("Default Response");
});

app.get("/movies", (_req, res) => {
  res.json(topMovies);
});

// listen for requests
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
