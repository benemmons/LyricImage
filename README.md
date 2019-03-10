
<div align="center">
<img src="https://raw.githubusercontent.com/benemmons/LyricImage/master/logo.svg?sanitize=true" height="150px">
<h1>LyricImage<br/><sub>A WebApp to visualise a song's lyrics in images.</sub></h1>

<a href="https://github.com/benemmons/LyricImage/blob/master/Frontend/README.md">Frontend</a> | 
<a href="https://github.com/benemmons/LyricImage/blob/master/Backend/README.md">Backend</a> 
</div>

<hr/>

**LyricImage allows users to input the name of a song and receive the top Google Images result for each word in the song's lyrics.** 

Its JS frontend interfaces with an Express Node.JS API backend. This backend uses the node module <a href="https://www.npmjs.com/package/node-lyrics">node-lyrics</a> to get the lyrics of any song available on <a href="http://lyrics.wikia.com/wiki/LyricWiki">LyricWikia</a> . These lyrics are then get separated into individual words. These words are then sent to the node module <a href="https://www.npmjs.com/package/google-images">google-images</a> to get the top images of the word. These images are sent back to the frontend to be viewed / downloaded by the user.