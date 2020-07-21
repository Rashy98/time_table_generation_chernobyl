const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow,Menu} = electron;

let mainWindow;
let addWindow;

//Listen for app to be ready
app.on('ready',function (){
    mainWindow = new BrowserWindow(({}));

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol:'file:',
        slashes:true
    }));
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
