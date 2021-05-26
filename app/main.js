const { Console } = require('console');
const electron = require('electron');
const path = require('path');
const url = require('url');


// Les constante
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

global.login = {access: false};



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


  //Connexion / Login
  ipcMain.on('security:login:allow', function (e, val) {
    global.login = {access: val};
  });

  ipcMain.handle('security:login:check', async (event) => {
    const result = global.login.access;
    return result
  })

   //Connexion / Login
   ipcMain.on('app:exit', function (e, val) {
    app.quit();
  });




 



  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    app.quit();
  });


});



