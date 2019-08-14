require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// var axios = require("axios"); 

// var movieName = process.argv[2];
// var queryUrl =  "http://www.omdbapi.com/?t="+ moviename +"&y=&plot=short&apikey=trilogy";
// axios.get(queryUrl).then( (response) => {
//     console.log("")
// }
//   function(response) {
//     // Then we print out the imdbRating
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );