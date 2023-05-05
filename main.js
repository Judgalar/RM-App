const { app, BrowserWindow } = require('electron');

app.commandLine.appendSwitch('disable-web-security')
app.commandLine.appendSwitch('allow-file-access-from-files')

const createWindow = () => {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
        width: 1500,
        height: 1000,
        icon: 'logo.png'
    });

    win.loadFile('juegos/index.html');
}

app.whenReady().then(() => {
    createWindow();
})

