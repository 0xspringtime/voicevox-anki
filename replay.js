<audio autoplay id=tts src="http://localhost:3000/audio?text={{AnkiField}}"></audio>
<script>
(() => {
  if (window.ttsListener) return
  document.addEventListener('keydown', (event) => {
    if (event.code.toLowerCase() === 'keyr') {
      document.querySelector('#tts').play()
    }
  })
  window.ttsListener = true
})()
</script>
