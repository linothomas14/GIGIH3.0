const songModel = require('../models/song')


function readAllSong() {
    songs = songModel.getAllSong()
    return songs
}

function readSongByID(ID) {
    song = songModel.getSongByID(ID)
    if (song === undefined) {
        throw new Error("Song not found");
    }
    return song
}

function addNewSong(title, artists, URL) {
    song = songModel.addNewSong(title, artists, URL)
    return song
}

function playSong(ID) {
    song = songModel.getSongByID(ID)
    if (song === undefined) {
        throw new Error("Song not found");
    }
    song = songModel.playSong(ID)

    return song
}

module.exports = {
    readAllSong,
    readSongByID,
    addNewSong,
    playSong
}