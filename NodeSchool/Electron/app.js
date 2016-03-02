const electron = require('electron');

electron.app.on("ready", () => {
  var win = new electron.BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
  });
  win.loadURL('file://'+__dirname+'/index.html');
});
