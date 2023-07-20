const songModel = require('../models/song')

let playlists = [{
        "ID": "1",
        "name": "Playlist 1",
        "songs": []
    },
    {
        "ID": "2",
        "name": "Playlist 2",
        "songs": []
    }
];

function getAllPlaylist() {

    playlists.forEach(playlist => {
        playlist.songs.sort((a, b) => b.count - a.count);
    });

    return playlists;
}

function getPlaylistByID(playlistID) {

    playlist = playlists.find((p) => p.ID === playlistID);

    playlist.songs.sort((a, b) => b.count - a.count);



    return playlist
}

function createPlaylist(name) {
    let playlist = {
        ID: generatePlaylistID(),
        name: name,
        songs: []
    }

    playlists.push(playlist)

    return playlist
}

function addSongPlaylist(playlistID, songID) {

    song = songModel.getSongByID(songID)
    playlist = playlists.find((p) => p.ID === playlistID);
    playlist.songs.push(song)


    return playlist
}



function generatePlaylistID() {
    return Math.random().toString(10).substring(2, 6)
}

module.exports = {
    addSongPlaylist,
    createPlaylist,
    getPlaylistByID,
    getAllPlaylist,

}