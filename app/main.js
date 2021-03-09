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
    width: 1250,
    height: 58,
    webPreferences: {
      nodeIntegration: true //Activation des dépendence (jquery/electron)
    }
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  //------------
  navWindow = new BrowserWindow({ frame: false, width: 200, height: 800, webPreferences: { nodeIntegration: true }, parent: mainWindow, show: false });


  navWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  
  navWindow.webContents.on('did-finish-load', () => {
    navWindow.webContents.send('ctrl:add', "Navigation");
  })



  navWindow.once('ready-to-show', () => {
    navWindow.show()
  })
  var posMain = mainWindow.getPosition();
  navWindow.setPosition(posMain[0]+10, posMain[1]+60);
  
  mainWindow.on('move', function() {
    let positionMain = mainWindow.getPosition();

    navWindow.setPosition( positionMain[0]+10 , positionMain[1]+60 );
  });
  //---------

  //------------
  contentWindow = new BrowserWindow({ frame: false, width: 1000, height: 800, webPreferences: { nodeIntegration: true }, parent: mainWindow, show: false });
  contentWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  contentWindow.once('ready-to-show', () => {
    contentWindow.show()
  })
  contentWindow.webContents.openDevTools({mode:'undocked'}) ;

  contentWindow.setPosition(posMain[0]+250, posMain[1]+60);
  
  mainWindow.on('move', function() {
    let positionMain = mainWindow.getPosition();

    contentWindow.setPosition( positionMain[0]+(250) , positionMain[1]+60 );
  });
  //---------

  mainWindow.on('closed', function () {
    app.quit();
  });

  //-----------------------------------------------


  ipcMain.on('nav:change', function (e, ctrl = "Home", method = "index") {
    contentWindow.webContents.send('ctrl:add', ctrl, method);
  });

});



