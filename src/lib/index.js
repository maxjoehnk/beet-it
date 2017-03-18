const { app, BrowserWindow, ipcMain, nativeImage } = require('electron');
const { join } = require('path');
const { format } = require('url');
const { list } = require('./beets');

let window;

function createWindow() {
    window = new BrowserWindow();
    window.loadURL(format({
        pathname: join(__dirname, '..', '..', 'build', 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    window.webContents.openDevTools();
    window.on('closed', () => window = null);
}

app.on('ready', () => createWindow());
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

ipcMain.on('startDrag', (event, result) => {
    window.webContents.startDrag({
        file: result.file,
        icon: nativeImage.createFromPath(join(__dirname, '..', '..', 'music-circle.png'))
    });
})

ipcMain.on('query', (event, query) => {
    list(query)
        .then(result => event.sender.send('results', result))
        .catch(err => {
            console.error(err);
        });
});
