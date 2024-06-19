# voicevox-anki
Documentation on how to add voicevox support to anki cards

__Method 1__

1. Download the Generate Batch Audio add-on from https://ankiweb.net/shared/info/1156270186 by copying and pasting the code 1156270186 into Tools > Add-ons > Get Add-ons

2. Go to https://voicevox.su-shiki.com/su-shikiapis/ and at step 1, click the hyperlink at "こちら", then pass the reCAPTCHA to receive your API key at a new page in a field under "apiKeyをコピー", save this for later use. The API key has a daily limit but it is very high and multiple keys can be made by a single user.

3. Now, go to the anki card browser and select all cards you would like to add voicevox tts to. Click Edit > Generate Bulk Audio. In the new window click "Add Source" and move the new field to the top in priority. This is important so the add-on uses voicevox first instead of the other sources.

4. Now, to select the voice needed go to https://voicevox.hiroshiba.jp/ to preview all voices then, replacing {apiKey} with your saved key go to https://api.su-shiki.com/v2/voicevox/speakers/?key={apiKey} and find the id of your desired voice actress.

5. Now, in the Bulk Generate Audio window Enter the Voicevox name then in custom URL add the url https://api.su-shiki.com/v2/voicevox/audio/?text={field}&key={API-KEY}&speaker={id} where API-KEY is your saved API key (no braces), {id} is your desired speaker (no braces), and {field} is the name of the field from which you would like tts generated WITH BRACES INCLUDED. The field may be any japanese text, including simply expressions as well as full sentences.

6. In the audio field section pick the field you would like the audio placed in, and leave the "filter kana" and "delay between requests" fields empty. 

7. Click Generate and wait for your cards to generate! Let me know of any problems encountered in the "Issues" tab.




__Method 2__

1. If you have voicevox downloaded, run with <code>--host localhost --cors_policy_mod all</code>
2. Run node.js script like example used [here](example.js)
3. Use http://localhost:3000/audio?text={AnkiField} as field in anki with Generate Batch Audio OR [this](line.html) as an example in your card to save disk space. To create a keybinding that resets audio one can use [this](replay.js)


__Method 3__

1. With voicevox downloaded, for a lightweight option one may opt to fetch the audio directly from within anki, without the need of a proxy using [this](replay.js) within the anki card template editor.
