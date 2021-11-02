const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

const menuTemplate = [];
let window;
app.on('ready', () => {
  window = new BrowserWindow({});
  window.loadURL(`file://${path.join(__dirname, 'public', 'index.html')}`);
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
});