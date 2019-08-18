require("dotenv").config();
var keys = require("./keys.js");
var axios = require('axios');

function movies(inputMovie) {
    var movie = inputMovie;
    
}

var movie = process.argv[2]; 
var queryURL = "https://www.omdbapi.com/?apikey=" + keys.omdb.key + "&t=" + movie;
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

