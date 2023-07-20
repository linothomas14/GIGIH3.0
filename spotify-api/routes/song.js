const express = require('express')
const router = express.Router()
const songController = require('../controllers/song')

router.post('/songs', songController.addNewSong)
router.get('/songs', songController.readAllSong)
router.get('/songs/:id', songController.readSongByID)
router.post('/songs/play/:id', songController.playSong)
module.exports = router