const electron = require('electron');
const url = require('url');
const path = require('path');

const server = require("../../backend")

const {app, BrowserWindow,Menu} = electron;

const isDev = require('electron-is-dev');

let mainWindow;
let addWindow;

//Listen for app to be ready
app.on('ready',function (){
    mainWindow = new BrowserWindow(({
        webPreferences: { nodeIntegration: true }
    }));

    // mainWindow.loadURL('http://localhost:3000')
    // mainWindow.loadURL('http://localhost:3000');
    // mainWindow.loadURL(url.format({
    //     pathname: path.join(__dirname,'index.html'),
    //     protocol:'file:',
    //     slashes:true
    // }));
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.on('closed',function () {
        app.quit();
    })

    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    //Insert menu
    Menu.setApplicationMenu(mainMenu);
});


//create menu template

const mainMenuTemplate = [
    {
        label:'File',
        label: 'Quit',
                accelerator:process.platform == 'darwin' ? 'Command+Q':'Ctrl+Q',
                click(){
                    app.quit();
                }

    }
];
