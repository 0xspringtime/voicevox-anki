# voicevox-anki
Documentation on how to add voicevox support to anki cards

1. Download the Generate Batch Audio add-on from https://ankiweb.net/shared/info/1156270186 by copy and pasting the code 1156270186 into Tools > Add-ons > Get Add-ons

2. Go to https://voicevox.su-shiki.com/su-shikiapis/ and at step 1 click the hyperlink at "こちら", then pass the reCAPTCHA to receive your API key at a new page in a field under "apiKeyをコピー", save this for later. The API key has a daily limit but it is very high and multiple keys can be made by a single user.

3. Now, go to the anki card browser and select all cards you would like to add voicevox tts to. Click Edit > Generate Bulk Audio. In the new window click "Add Source" and move the new field to the top in priority. This is important so the add-on uses voicevox first instead of the other sources.

4. Now, to select the voice needed go to https://voicevox.hiroshiba.jp/ to preview all voices then, replacing {apiKey} with your saved key go to https://api.su-shiki.com/v2/voicevox/speakers/?key={apiKey} and find the id of your desired voice actress.

5. Now, in the Bulk Generate Audio window Enter the Voicevox name then in custom URL add the url https://api.su-shiki.com/v2/voicevox/audio/?text={field}&key={API-KEY}&speaker={id} where API-KEY is your saved API key (no braces), {id} is your desired speaker, and {field} is the name of the field from which you would like tts generated WITH BRACES INCLUDED. The field may be any japanese text, including simply expressions as well as full sentences.

6. In the audio field section pick the field you would like the audio placed in, and leave the "filter kana" and "delay between requests" fields empty. 

7. Click Generate and wait for your cards to generate! Let me know of any problems encountered in the "Issues" tab.
