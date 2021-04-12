const { Console } = require('console');
const electron = require('electron');
const path = require('path');
const url = require('url');

// Les constante
const { app, BrowserWindow, BrowserView, ipcMain } = electron;

let mainWindow;
let mainNav;
let mainContent;

// Lorsque l'app est prête
app.on('ready', function () {
  // Création d'une nouvelle fenêtre
  mainWindow = new BrowserWindow({
    width: 1450,
    height: 800,
    webPreferences: {
      nodeIntegration: true //Activation des dépendence (JQuery/Electron)
    }
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.webContents.openDevTools() ;

  mainWindow.on('closed', function () {
    app.quit();
  });


});



