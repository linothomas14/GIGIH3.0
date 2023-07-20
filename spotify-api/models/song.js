let songs = [{
        "ID": "1",
        "title": "song 1",
        "artists": [
            "Adele"
        ],
        "count": 0,
        "URL": "http://localhost"
    },
    {
        "ID": "2",
        "title": "song 2",
        "artists": [
            "Adele",
            "Bruno Mars"
        ],
        "count": 0,
        "URL": "http://localhost"
    }
];

function getAllSong() {
    return songs;
}

function getSongByID(ID) {
    return songs.find((s) => s.ID === ID);
}


function addNewSong(title, artists, URL) {
    let song = {
        ID: generateSongId(),
        title: title,
        artists: artists,
        URL: URL,
        count: 0
    }
    songs.push(song);
    return song
}

function playSong(ID) {
    song = songs.find((s) => s.ID === ID)
    song.count++

    return song
}

function generateSongId() {
    return Math.random().toString(10).substring(2, 6)
}

module.exports = {
    getAllSong,
    getSongByID,
    addNewSong,
    getSongByID,
    playSong
}