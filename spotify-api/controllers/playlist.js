const playlistService = require('../services/playlist')


let addNewPlaylist = (req, res) => {
    try {
        const {
            name,
        } = req.body;
        if (!name) {
            throw new Error("Insufficient Parameter")
        }
        playlistService.addNewPlaylist(name)
        res.status(201).json({
            message: "Playlist Created"
        })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({
            error: e.message
        })
    }
};

let readAllPlaylist = (req, res) => {
    try {

        playlists = playlistService.readAllPlaylist()
        res.status(200).json({
            message: playlists
        })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({
            error: e.message
        })
    }
};

let readPlaylistByID = (req, res) => {
    try {
        const {
            id
        } = req.params
        playlist = playlistService.readPlaylistByID(id)
        res.status(200).json({
            message: playlist
        })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({
            error: e.message
        })
    }
};

let addSongToPlaylist = (req, res) => {
    try {
        const {
            playlistID,
            songID
        } = req.params


        playlist = playlistService.addSongToPlaylist(playlistID, songID)
        res.status(200).json({
            message: playlist
        })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({
            error: e.message
        })
    }
}
module.exports = {
    readPlaylistByID,
    readAllPlaylist,
    addNewPlaylist,
    addSongToPlaylist
}