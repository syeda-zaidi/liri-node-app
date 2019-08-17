require("dotenv").config();
var keys = require("./keys.js");
var axios = require('axios');

var BandsInTownURL = "https://rest.bandsintown.com/artists/"+ "ed sheeran" +"/events?app_id="+ keys.bandsInTown.key;
axios.get(BandsInTownURL).then( (response) => {
  console.log("venue : " + response.data[0].venue.name);
  console.log("Date and Time : " + response.data[0].datetime);
})
