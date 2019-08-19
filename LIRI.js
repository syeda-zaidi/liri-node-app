require("dotenv").config();

//require npm packages
var fs = require("fs");
var inquirer = require("inquirer");
var moment = require("moment");
var axios = require("axios");

// require keys.js file
var keys = require("./keys.js");

//initialize spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//ombd and bandsInTown API's 
var omdbKey = keys.omdb.key;
var bandsInTownKey = keys.bandsInTown.key;

var inputCommand = process.argv[2];
var inputSearch = process.argv.slice(3).join(" ");


movieThis = () => {
  var queryURL = "https://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + inputSearch;
  axios.get(queryURL).then((response) => {
    // console.log(response)
    console.log("\n----------\n");
    console.log("Movie Title : " + response.data.Title);
    console.log("Year : " + response.data.Year);
    console.log("IMBD Rating : " + response.data.imdbRating);
    console.log("IMBD Rating : " + response.data.imdbRating);
    console.log("Plot : " + response.data.Plot)
  })
    .catch((err) => {
      console.log(err);
    })
}

concertThis = () => {
  var BandsInTownURL = "https://rest.bandsintown.com/artists/" + inputSearch + "/events?app_id=" + bandsInTownKey;
  axios.get(BandsInTownURL).then((response) => {
    var results = response.data
    if (results.length === 0) {
      console.log("well, " + inputSearch + " is not performing anytime soon. Try a different artist")
    } else {
      console.log("\nUpcoming Shows For: " + inputSearch + "\n");
      for (var i = 0; i < 3; i++) {
        var eventDate = moment(response.data[i].datetime).format("MMM Do YYYY");
        console.log("Venue Name : " + response.data[i].venue.name);
        console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
        console.log("Event Date: " + eventDate);
        console.log("-----------------------------")
      }
    }
  })
    .catch(function (error) {
      if (error.response) {
      }
    })
}

spotifythis = () => {
  spotify.search({ type: "track", query: inputSearch }, function (err, data) {
    if (err) {
      return console.log("error occurred: " + err);
    }

    console.log("\n-------SONG INFO-------\n");
    for (var i = 0; i < 3; i++) {
      console.log("Artist Name : " + data.tracks.items[i].artists[0].name)
      console.log("Song Title : " + data.tracks.items[i].name)
      console.log("Song preview url : " + data.tracks.items[i].preview_url);
      console.log("Album name : " + data.tracks.items[i].album.name);
      console.log("\n--------------\n");
      // console.log(data.tracks);
    }
  });
};

runLIRI = () => {
  if (inputCommand === "movie-this") {
    if (inputSearch) {
      movieThis();
    } else {
      console.log("please enter movie title to make a search ")
    }
  } else if (inputCommand === "concert-this") {
    if (inputSearch) {
      concertThis();
    } else {
      console.log("Enter an artist to find where they're performing next!");
    }
  } else if (inputCommand === "spotify-this-song") {
    if (inputSearch) {
      spotifythis();
    } else {
      console.log("Enter a song to make the search")
    }
  }
};

runLIRI();
