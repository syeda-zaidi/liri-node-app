require("dotenv").config();

//require npm packages
var fs = require("fs");
var inquirer = require("inquirer");
var axios = require("axios"); 

// require keys.js file
var keys = require("./keys.js");

//initialize spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//ombd and bandsInTown API's 
var omdbKey = keys.omdb.key;
var bandsInTown = keys.bandsInTown.key;

var inputCommand = process.argv[2];
var inputSearch = process.argv.slice(3).join(" ");


movieThis = () => {
  var queryURL = "https://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + inputSearch;
axios.get(queryURL).then( (response) => {
    // console.log(response)
    console.log("\n----------\n");
    console.log("Movie Title : " + response.data.Title);
    console.log("Year : "+ response.data.Year);
    console.log("IMBD Rating : "+ response.data.imdbRating);
    console.log("IMBD Rating : "+ response.data.imdbRating);
    console.log("Plot : " + response.data.Plot)
})
.catch((err) => {
    console.log(err);
})
}

if (inputCommand === "movie-this") {
  if (inputSearch) {
    movieThis();
  } else {
    console.log("please enter movie title to make a search ")
  }
}