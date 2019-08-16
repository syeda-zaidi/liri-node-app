require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

console.log(keys.js)
var axios = require("axios"); 

// var BandsInTownURL = "https://rest.bandsintown.com/artists/"+ process.argv[3] +"/events?app_id=codingbootcamp";
// axios.get(BandsInTownURL).then( (response) => {
//   console.log(response.venue);
// })
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