require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();

const PORT = process.env.PORT !== undefined ? process.env.PORT : 3000;

// if (process.env.PORT !== undefined){
//     PORT = process.env.PORT;
// } else{
//     PORT = 3000;
// }

// New comment
// GET /movies route
// expects an s query parameter
// Go to OMDB API and search for s
app.get("/movies", (req, res) => {
  // fetch http://www.omdbapi.com/?apikey=&s=req.query.s
  const url = `http://www.omdbapi.com/?apikey=${process.env.OMDB_APIKEY}&s=${req.query.s}`;
  axios.get(url).then((movies) => {
    return res.json(movies.data);
  });
});

app.listen(PORT, () => {
  console.log("Server started");
});
