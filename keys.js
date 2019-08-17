var keys = {
  spotify: {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  },
  omdb: {
    key: process.env.OMDBKey
  },
  bandsInTown: {
    key: process.env.BandsInTownKey,
  },
}

module.exports = keys;
