const electron = require('electron');
const { app, BrowserWindow } = electron;

app.on('ready', () => {
    let window = new BrowserWindow({
        width: 800,
        height: 500
    });
    window.loadURL(`file://${__dirname}/index.html`);    
});

exports.openYoutube = () => {
    var anotherWindow = new BrowserWindow({
        width: 500,
        height: 300
    });
    anotherWindow.loadURL('https://www.youtube.com/watch?v=wAq8WfQEAq4');
};
