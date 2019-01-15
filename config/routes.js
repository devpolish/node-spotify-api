'use strict'

const express = require('express')
const artistsController = require('../controllers/artists_controller')
const api = express.Router()

// Artists Resource

api.get('/artists', artistsController.getArtists)
