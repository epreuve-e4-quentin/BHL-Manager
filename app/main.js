/*faire appel aux modules d'electron*/ 
const electron = require('electron');         
const path = require('path');
const url = require('url');



const { app, BrowserWindow, BrowserView, ipcMain } = require('electron');

let mainWindow;
let mainNav;
let mainContent;

//Lorque l'app est prete

app.on('ready', function(){
  const mainWindow = new BrowserWindow({
    width: 800,                                             //Créer la fenetre 
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes:true
  }));
  
  //Navigation
  const nav = new BrowserView(); //Instenciation de la vue du navigateur
  mainWindow.addBrowserView(nav); //Ajout de la vue à la fenetere principale
  nav.setBounds({ x: 0, y: 0, width: 300, height: 300}); //Ajout de la position de la vue
  nav.webContents.loadURL('https://electronjs.org'); //Implémentation de la page sur la vue
  
  const content = new BrowserView();
  mainWindow.addBrowserView(content);
  content.setBounds({ x: 301, y: 0, width : 800, height : 500 });
  content.webContents.loadURL('https://google.fr');
})  ;
