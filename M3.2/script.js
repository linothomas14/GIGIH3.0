db = connect("mongodb://localhost/spotify");

db.songs.drop();
db.artists.drop();
db.popularSongs.drop();


let songs = [{
    "title": "Heal the world",
    "artists": ["Michele", "Jackson"],
    "album": "First album",
}, {
    "title": "Black or White",
    "artists": ["Michele", "Jackson"],
    "album": "Second album",
}, {
    "title": "Tihiii",
    "artists": ["Michele", "Jackson"],
    "album": "Second album",
}, {
    "title": "Tihiii",
    "artists": ["Michele", "Jackson"],
    "album": "Second album",
}, {
    "title": "Tihiii",
    "artists": ["Michele", "Jackson"],
    "album": "Second album",
}, {
    "title": "Tihiii",
    "artists": ["Michele", "Jackson"],
    "album": "Second album",
}, {
    "title": "Tihiii",
    "artists": ["Michele", "Jackson"],
    "album": "Second album",
}, {
    "title": "Tihiii",
    "artists": ["Michele", "Jackson"],
    "album": "Second album",
}, {
    "title": "Tihiii",
    "artists": ["Michele", "Jackson"],
    "album": "Second album",
}, {
    "title": "Tihiii",
    "artists": ["Michele", "Jackson"],
    "album": "Second album",
}, ]

let artists = [{
        "name": "Michele",
        "date of birth": "14 Juli 2001",
        "genre": ["Pop", "R n B"]
    }, {
        "name": "Ariel",
        "date of birth": "14 Juli 2001",
        "genre": ["Pop", "R n B"]
    },
    {
        "name": "Rhoma",
        "date of birth": "14 Juli 2001",
        "genre": ["Dangdut"]
    }, {
        "name": "Michele",
        "date of birth": "14 Juli 2001",
        "genre": ["Pop", "R n B"]
    }, {
        "name": "Ariel",
        "date of birth": "14 Juli 2001",
        "genre": ["Pop", "R n B"]
    },
    {
        "name": "Rhoma",
        "date of birth": "14 Juli 2001",
        "genre": ["Dangdut"]
    }, {
        "name": "Michele",
        "date of birth": "14 Juli 2001",
        "genre": ["Pop", "R n B"]
    }, {
        "name": "Ariel",
        "date of birth": "14 Juli 2001",
        "genre": ["Pop", "R n B"]
    },
    {
        "name": "Rhoma",
        "date of birth": "14 Juli 2001",
        "genre": ["Dangdut"]
    }, {
        "name": "Michele",
        "date of birth": "14 Juli 2001",
        "genre": ["Pop", "R n B"]
    }, {
        "name": "Ariel",
        "date of birth": "14 Juli 2001",
        "genre": ["Pop", "R n B"]
    },
    {
        "name": "Rhoma",
        "date of birth": "14 Juli 2001",
        "genre": ["Dangdut"]
    },
]

let popularSongs = [{
    "title": "Heal the world",
    "played": 4000,
    "period_of_time": 2023
}, {
    "title": "Heal the world",
    "played": 4000,
    "period_of_time": 2023
}, {
    "title": "Heal the world",
    "played": 4000,
    "period_of_time": 2023
}, {
    "title": "Heal the world",
    "played": 4000,
    "period_of_time": 2023
}, {
    "title": "Heal the world",
    "played": 4000,
    "period_of_time": 2023
}, {
    "title": "Heal the world",
    "played": 4000,
    "period_of_time": 2023
}, {
    "title": "Heal the world",
    "played": 4000,
    "period_of_time": 2023
}, {
    "title": "Heal the world",
    "played": 4000,
    "period_of_time": 2023
}, {
    "title": "Heal the world",
    "played": 4000,
    "period_of_time": 2023
}, {
    "title": "Heal the world",
    "played": 4000,
    "period_of_time": 2023
}, ]

db.songs.insertMany(songs);
db.artists.insertMany(artists);
db.popularSongs.insertMany(popularSongs);