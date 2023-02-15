import express from "express"
import fetch from "node-fetch"

const app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

const host = 'http://localhost:50021'
const speaker = 0

app.get("/audio", async (req, res, next) => {
    const {text} = req.query
    console.log(`Got ${text}`)
    const audioQuery = await fetch(`${host}/audio_query?text=${text}&speaker=${speaker}`, {
        "method": "POST"
    })
    const meta = await audioQuery.json()

    const maybeWav = await fetch(`${host}/synthesis?speaker=${speaker}`, {
        "headers": {
            "content-type": "application/json",
        },
        "body": JSON.stringify(meta),
        "method": "POST",
    })
    res.setHeader('Content-Type', 'audio/wav')
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(text)}.wav"`);
    maybeWav.body.pipe(res);
})
