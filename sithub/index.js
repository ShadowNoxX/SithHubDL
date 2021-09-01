const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());
app.listen(443, () => {
    console.log("Listening at port 4000");
});
app.get("/", (req, res) => {
    res.status(404).send("Nothing there");
})
app.get('/dlv', (req,res) => {
    var URL = req.query.URL;
    var title = null;
    if (!String(URL).startsWith("https://www.youtube.com/watch?v=")){
        res.status(400).send("400 - Bad Request");
        return;
    };
    let p = ytdl.getInfo(URL);
    p.then((info) => {
        title = info.videoDetails.title;
        res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
        ytdl(URL, {
            format: 'mp4'
        }).pipe(res);
    });
});

app.get('/dla', (req,res) => {
    var URL = req.query.URL;
    var title = null;
    if (!String(URL).startsWith("https://www.youtube.com/watch?v=")){
        res.status(400).send("400 - Bad Request");
        return;
    };
    let p = ytdl.getInfo(URL);
    p.then((info) => {
        title = info.videoDetails.title;
        res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
        ytdl(URL, {
            filter: "audioonly",
            format: 'mp3'
        }).pipe(res);
    });
});
