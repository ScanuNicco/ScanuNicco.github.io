window.onload = checkEnter;
function checkEnter(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    console.log("the key that was pressed is " + keycode);
    if (keycode == 13) {
        loadUrl();
    }
}

//get the stored homepage
var homePage = localStorage.getItem("homepage");
//get the stored new tab page
var NTpage = localStorage.getItem("ntpage");
//get the currently active frame
var activeFrame = document.getElementById('frame' + selectedTab);
//get the stored bookmarks
var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
if (bookmarks == null){
	bookmarks = [{name: "Scanu Productions", url: "http://scanurag.com", id: 1}];
	console.log("Added Default Bookmarks");
}
//get the total number of bookmarks ever created to ensure that each bookmark has a unique ID
var totalBookmarks = 1;

//the number of tabs ever opened, tab IDs are based off of this
var numberOfTabs = 1;
//the number of tabs currently open
var remainingTabs = 1;
var tabs = [{tabNumber: 0, iframeNumber: 0, url: homePage}, ]
function addTab() {
    //calculate the position of the new tab, each tab is 100px wide with 15px between each tab
    var newTabPosition = remainingTabs * 105 + 10;
    //create the new element
    var nTab = document.createElement("div");
    //give the tab an id number and and display it on the tab
    tabNumber = numberOfTabs + 1;
    var node = document.createTextNode("Tab #" + tabNumber);
    nTab.appendChild(node);
    //add required properties to the new tab
    nTab.classList.add("tab");
    nTab.style.position = "absolute";
    nTab.style.left = newTabPosition + "px";
    nTab.style.top = "0px";
    nTab.setAttribute("id", "tab" + numberOfTabs)
    nTab.setAttribute("onclick", "focusTab('tab" + numberOfTabs + "', " + numberOfTabs + ")")
    nTab.innerHTML = "Tab #" + tabNumber + '<p class="closeButton" onclick="closeTab(\'tab' + numberOfTabs + '\')">&times;</p>';
    //add tab to tab container
    var container = document.getElementById("tabContainer");
    container.appendChild(nTab);
    //add the associated frem for the new tab
    addFrame();
    //re-position the add tab button
    document.getElementById("addTab").style.left = newTabPosition + 105 + "px";
    //Add a new entry to the tabs array
    tabs.push({tabNumber: numberOfTabs, iframeNumber: numberOfTabs, url: NTpage})
    //focus the new tab
    focusTab("tab" + numberOfTabs, numberOfTabs);
    //load the home page on the new tab
    loadUrl();
    //increase the number of tabs counter
    numberOfTabs++;
    remainingTabs++;
}

function addFrame() {
    //define parent element
    var browserWindow = document.getElementById("browser"); 
    //create the new element
    var nFrame = document.createElement("webview");
    //assign an id
    nFrame.setAttribute("id", "frame" + numberOfTabs);
    //add the required class
    nFrame.classList.add("displayFrame");
    //hide frame
    nFrame.setAttribute("display", "none");
    //alert doneloading function when loading complete
    nFrame.setAttribute("onload", "doneLoading()");
    //apply new frame to parent element
    browserWindow.appendChild(nFrame);
}

var oldTab = "tab0";
var selectedTab = 0;
function focusTab(tabID, tabIDcode) {
    //remove active class from old tab
    document.getElementById(oldTab).classList.remove("activeTab");
    //add active class to new tab
    document.getElementById(tabID).classList.add("activeTab");
    //re define the old tab
    oldTab = tabID;
    //define a variable for the currently selected tab
    selectedTab = tabIDcode;
    console.log("Running Loop");
    for (i=0; i<tabs.length; i++) {
        console.log('.');
        //search for array entry with id number that matches tabIDcode
        if(tabIDcode == tabs[i].tabNumber) {
            document.getElementById("urlSource").value = tabs[i].url;
        }
    }
    //run the focusFrame() function to display correct page
    focusFrame(tabIDcode);
}

var frameID = "frame0";
function focusFrame(frameIDcode){
    //Hide the old frame
    document.getElementById(frameID).style.display = "none";
    //Get ID of new frame
    frameID = "frame" + frameIDcode;
    //Display New Frame
    document.getElementById(frameID).style.display = "flex";
}

function closeTab(tab) {
    //Check if tab to be closed is active
    if (document.getElementById(tab).classList.contains("activeTab") == true) {
        //switch active class to tab 0
            document.getElementById("tab0").classList.add("activeTab");
            oldTab = "tab0";
    }
    //remove the tab
    document.getElementById(tab).remove();
    //change the number of remaing tabs, this is required for the add tab function
    remainingTabs--;
    //reposition the tabs to fill the gap
    repositionTabs();
}

function repositionTabs() {
    var tabs = document.getElementsByClassName('tab');
    for(i=0; i<tabs.length; i++) {
        //position the tabs based on the loop counter
        if (i == 0) {
            tabs[i].style.left = i * 105 + "px";

        } else {
            tabs[i].style.left = i * 105 + 10 + "px";
        }
    }
    document.getElementById("addTab").style.left = i * 105 + 10 + "px";
}

function loadUrl() {
    var newUrl = document.getElementById("urlSource").value;
    tabs[selectedTab].url = newUrl;
    if (newUrl == "rag://newtab") {
        newUrl = "new-tab.html"
    }
    document.getElementById("frame" + selectedTab).src = newUrl;
    console.log("loaded " + newUrl + " on frame " + selectedTab);
}

function loadBookmark(newLocation) {
    document.getElementById("urlSource").value = newLocation;
    loadUrl();
}
    
function Reload () {
var f = document.getElementById('frame' + selectedTab);
f.src = f.src;
}

function doneLoading() {
    console.log("done loading");
    setTimeout(document.getElementById("reload-btn").classList.remove("spin"), 1000);
}

function fullscreenIframe() {
    console.log("Put frame into fullscreen mode");
    var elem = document.getElementById("frame" + selectedTab);
    if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
    if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    }  
}

function goBackwards() {
   var f = document.getElementById('frame' + selectedTab);
   f.goBack(); 
}

function goForwards() {
   var f = document.getElementById('frame' + selectedTab);
   f.goForward(); 
}

function loadstart(){
    document.getElementById("reload-btn").classList.add("spin");
}

window.onload = addListeners;
function addListeners() {
    document.getElementById('frame' + selectedTab).addEventListener('did-start-loading', loadstart)
    document.getElementById('frame' + selectedTab).addEventListener('did-stop-loading', doneLoading)
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

function addBookmark(part){
    if (part == 1){ 
        document.getElementById("bookmarkUrl").value = document.getElementById("urlSource").value;
        document.getElementById("createBookmark").style.display = "block";
    }
    if (part == 2){
        document.getElementById("createBookmark").style.display = "none";
        var url = document.getElementById("bookmarkUrl").value;
        var name = document.getElementById("bookmarkName").value;
        totalBookmarks++;
        bookmarks.push({name: name, url: url, id: totalBookmarks});
		localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
		scanBookmarks();
    }
}

function scanBookmarks() {
    //Remove all existing bookmark elements
    document.getElementById("bookmarksContainer").innerHTML = "";
    //loop runs for each item in the array bookmarks
    for (i=0; i<bookmarks.length; i++){
        //create new element
        var nBook = document.createElement("a");
        //assign it a name form the array
        nBook.innerHTML = bookmarks[i].name;
        //add the url to the bookmark so that it opens when clicked
        nBook.setAttribute("onclick", "loadBookmark('" + bookmarks[i].url + "')");
        //add the bookmark class to the new element
        nBook.classList.add("bookmarks");
        //define the container
        var container = document.getElementById("bookmarksContainer");
        //add the new element to the container
        container.appendChild(nBook);
    }
}

window.addEventListener("message", update, false);
function update(event) {
	window.location.href = "updater.html";
}
scanBookmarks();