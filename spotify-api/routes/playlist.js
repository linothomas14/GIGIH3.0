const express = require('express')
const router = express.Router()
const playlistController = require('../controllers/playlist')

router.post('/playlists', playlistController.addNewPlaylist)
router.post('/playlists/:playlistID/addSong/:songID', playlistController.addSongToPlaylist)
router.get('/playlists', playlistController.readAllPlaylist)
router.get('/playlists/:id', playlistController.readPlaylistByID)
module.exports = router