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
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true //Activation des dépendence (jquery/electron)
    }
  });


  // Quit app when closed
  mainWindow.on('closed', function () {
    app.quit();
  });


  //-------------Navigation------------------
  mainNav = new BrowserView({
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.addBrowserView(mainNav);
  console.log(mainWindow.getBrowserView());
  mainNav.setBounds({ x: 0, y: 0, width: 300, height: 800 });
  mainNav.webContents.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainNav.webContents.openDevTools({mode:'undocked'}) ;

  mainNav.webContents.on('did-finish-load', () => {
    mainNav.webContents.send('ctrl:add', "Navigation");
  })
  //----------------------------------------




  //-------------Contenu principal------------------
  mainContent = new BrowserView({
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.addBrowserView(mainContent);
  mainContent.webContents.openDevTools({ mode: 'undocked' });
  mainContent.setBounds({ x: 301, y: 0, width: 500, height: 800 });




  mainContent.webContents.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));


  mainContent.webContents.on('did-finish-load', () => {
    mainContent.webContents.send('ctrl:add', "Home");
  })


  //-----------------------------------------------


  ipcMain.on('ctrl:add', function (e, ctrl = "Home", method = "index") {

    
    mainContent.webContents.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    }));


    mainContent.webContents.session.clearCache(function () { console.log('cleared all cookies '); });

    mainContent.webContents.on('did-finish-load', () => {
      mainContent.webContents.send('ctrl:add', ctrl, method);
    });




  });

});



