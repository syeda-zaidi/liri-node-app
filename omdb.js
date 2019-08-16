var keys = require("./keys.js");

var axios = require("axios");

var movie = process.argv[2]; 
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=" + keys.omdbkey.omdbkey;
axios.get(queryURL).then( (response) => {
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

console.log(keys.omdbkey.omdbkey);