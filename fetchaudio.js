<script>
var ttsText = `{{AnkiField}}`;
var ttsCache = null;
(() => {
    const host = 'http://localhost:50021'
    const speaker = 0
    const getAudio = async (text) => {
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
        ttsCache = await maybeWav.arrayBuffer()
    }
    const play = async (text) => {
        if (ttsCache === null) {
            await getAudio(text)
        }
        const buffer = ttsCache.slice(0)
        const audioContext = new(window.AudioContext || window.webkitAudioContext)()
        const decodedAudio = await audioContext.decodeAudioData(buffer)
        const gain = audioContext.createGain()
        gain.connect(audioContext.destination)
        const playSound = audioContext.createBufferSource()
        playSound.buffer = decodedAudio
        playSound.connect(gain)
        playSound.start(0)
    }
    if (!window.ttsListener) {
        document.addEventListener('keydown', (event) => {
            // needs shift + r for replay. probably better to be replayed with 'keye' for 'e'
            if (event.code.toLowerCase() === 'keyr') {
                play(ttsText)
            }
        })
        window.ttsListener = true
    }
    play(ttsText)
})()
</script>
