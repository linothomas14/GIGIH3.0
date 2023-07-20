const playlistModel = require('../models/playlist')
const songModel = require('../models/song')

function readAllPlaylist() {
    playlists = playlistModel.getAllPlaylist()
    return playlists
}

function readPlaylistByID(ID) {
    playlist = playlistModel.getPlaylistByID(ID)
    return playlist
}

function addNewPlaylist(name) {
    playlist = playlistModel.createPlaylist(name)
    return playlist
}

function addSongToPlaylist(playlistID, songID) {
    playlist = playlistModel.getPlaylistByID(playlistID)

    if (playlist === undefined) {
        throw new Error("Playlist not found");
    }
    song = songModel.getSongByID(songID)

    if (song === undefined) {
        throw new Error("Song not found");
    }

    playlist = playlistModel.addSongPlaylist(playlistID, songID)

    return playlist
}

module.exports = {
    readAllPlaylist,
    readPlaylistByID,
    addSongToPlaylist,
    addNewPlaylist
}