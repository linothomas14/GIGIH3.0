const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
let playlist = [];



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/songs', (req, res) => {
    const {
        title,
        artists,
        url
    } = req.body;

    // Membuat objek lagu baru
    const song = {
        title,
        artists,
        url
    };

    // Menambahkan lagu ke playlist
    playlist.push(song);

    res.status(201).json({
        message: 'Song added to playlist'
    });
})

// Route untuk memutar lagu dari playlist
app.get('/playlist/play', (req, res) => {
    // Memeriksa apakah ada lagu dalam playlist
    if (playlist.length === 0) {
        res.status(404).json({
            message: 'Playlist is empty'
        });
    } else {
        // Memutar lagu pertama dari playlist
        const song = playlist[0];
        res.status(200).json(song);
    }
});

// Route untuk mendapatkan daftar lagu dari playlist
app.get('/playlist', (req, res) => {
    res.status(200).json(playlist);
});

// Menjalankan server pada port tertentu

app.listen(port, () => {
    console.log('Server is running on port 3000');
});