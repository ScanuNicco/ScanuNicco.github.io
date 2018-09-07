var BrowserWindow = require('electron').remote;
var theWindow = BrowserWindow.getCurrentWindow();

function closeWindow(){
	theWindow.close();
}

function maxWindow() {
	if (!theWindow.isMaximized()) {
        theWindow.maximize();          
    } else {
        theWindow.unmaximize();
    }
}

function minWindow() {
	theWindow.minimize(); 
}
