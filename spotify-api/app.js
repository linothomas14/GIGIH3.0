const express = require('express')
const songRoutes = require('./routes/song')
const playlistRoutes = require('./routes/playlist')
const app = express();
app.use(express.json());

app.use("/", songRoutes);
app.use("/", playlistRoutes);

app.listen("3000", () => {
    console.log('Server is running on port 3000');
});