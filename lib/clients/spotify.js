const spotifyApi = require('spotify-web-api-node')

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

const spotify = new spotifyApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI
});

module.exports = {
  spotify
}