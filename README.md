## Run pixelplace bots without Tampermonkey
### To use: Copy paste one of the bot's code into your Chrome console (Press Ctrl+Shift+I)

Creates a new window and hooks jQuery to pause script.min.js and load the bot

That way you can emulate @run-at -> document-start, by running the code before script.min.js loads; giving the userscripts time to hook the WebSocket. 

Does not work with Firefox (Planning on adding support, by listening for onbeforescriptexecute)
