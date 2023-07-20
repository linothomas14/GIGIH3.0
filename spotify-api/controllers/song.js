const songService = require('../services/song')


let addNewSong = (req, res) => {
    try {
        const {
            title,
            artists,
            URL
        } = req.body;
        if (!title || !artists || !URL) {
            throw new Error("Insufficient Parameter")
        }
        songService.addNewSong(title, artists, URL)
        res.status(201).json({
            message: "Song Added"
        })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({
            error: e.message
        })
    }
};

let readAllSong = (req, res) => {
    try {

        songs = songService.readAllSong()
        res.status(200).json({
            message: songs
        })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({
            error: e.message
        })
    }
};

let readSongByID = (req, res) => {
    try {
        const {
            id
        } = req.params
        song = songService.readSongByID(id)
        res.status(200).json({
            message: song
        })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({
            error: e.message
        })
    }
};

let playSong = (req, res) => {
    try {
        const {
            id
        } = req.params
        song = songService.playSong(id)
        res.status(200).json({
            message: song
        })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({
            error: e.message
        })
    }
};


module.exports = {
    addNewSong,
    readSongByID,
    readAllSong,
    playSong
}