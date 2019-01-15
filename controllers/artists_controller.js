'use strict'

const spotify = require('../lib/clients/spotify')

function getArtists(req, res) {
	spotify.getArtists({}, (err, products) => {
	  if (err) return res.status(500).send({ message: `Error ${err}` })
	  if (!products) return res.status(404).send({ message: 'Product not found' })
	  res.status(200).send({ products })
  })
}

module.exports = {
  getArtists
}