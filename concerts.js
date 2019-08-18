require("dotenv").config();
var keys = require("./keys.js");
var axios = require('axios');

var artist = process.argv[2];
var BandsInTownURL = "https://rest.bandsintown.com/artists/"+ artist +"/events?app_id="+ keys.bandsInTown.key;
axios.get(BandsInTownURL).then( (response) => {
  console.log("venue : " + response.data[0].venue.name);
  console.log("Date and Time : " + response.data[0].datetime);
})
