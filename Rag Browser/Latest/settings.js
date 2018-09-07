//get the stored homepage
var homePage = localStorage.getItem("homepage");
//if stored home page is null, set it to scanuproductions.com
if (homePage == null){
	homePage = "http://www.scanuproductions.com";
}
//display the current home page
document.getElementById("homePageInput").value = homePage;
function updateHP(){
    //update the homepage variable
    homePage = document.getElementById("homePageInput").value;
    //update the stored data
	localStorage.setItem("homepage", homePage)
}

//get the stored new tab page variable
var NTtype = localStorage.getItem("nttype");
var NTpage = localStorage.getItem("ntpage");
//if stored variables do not exist, define them
if (NTtype == null){
	NTtype = 0;
	document.getElementById("defaultNT").checked = true;
}
//if stored variables are the default new tab page display that
else if (NTtype == 0){
	document.getElementById("defaultNT").checked = true;
}
//if stored variables are the default home page display that
else if (NTtype == 1){
	document.getElementById("HPNT").checked = true;
}
//if stored variables are a custom new tab page display that
else {
	document.getElementById("customNT").checked = true;
    //if page is not set, set it
	if (NTpage == null){
		NTpage = "http://www.google.com";
	}
	document.getElementById("customURL").value = NTpage;
}
function setNT() {
    //check which options is selected and save the appropriate data
	if (document.getElementById("defaultNT").checked == true){
		NTpage = "rag://newtab";
		NTtype = 0;
	}
	else if (document.getElementById("HPNT").checked == true){
		NTpage = homePage;
		NTtype = 1;
	}
	else {
		NTpage = document.getElementById("customURL").value;
		NTtype = 2;
	}
	localStorage.setItem("ntpage", NTpage);
	localStorage.setItem("nttype", NTtype);
    document.getElementById("restartRequired").style.display = "block";
}

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