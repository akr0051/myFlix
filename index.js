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

// default message
app.get("/", (_req, res) => {
  res.send("Default Response");
});

//all movies
app.get("/movies", (_req, res) => {
  res.json(topMovies);
});

// details based on title
app.get("/movies/:title", (req, res) => {
  res.json(
    topMovies.find((movie) => {
      return movie.title === req.params.title;
    })
  );
});

// genre by title
app.get("/movies/genres/genre", (_req, res) => {
  res.send("Successful GET request returning data on movie genre");
});

// director by name
app.get("/movies/directors/director", (_req, res) => {
  res.send("Successful GET request returning data on director");
});

// Registers a new user
app.post("/users", (_req, res) => {
  res.send("Successful POST request adding user");
});

// Update info
app.put("/users/username", (_req, res) => {
  res.send("Successful PUT request updating info on user");
});

// Add movie
app.post("/users/username/movies/movietitle", (_req, res) => {
  res.send("Successful put request adding a movie to user list");
});

// Delete movie
app.delete("/users/username/movies/movietitle", (_req, res) => {
  res.send("Successful Delete request deleting movie from user list");
});

// Deregister
app.delete("/users/username", (_req, res) => {
  res.send("Successful Delete request deleting user");
});

// listen for requests
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
