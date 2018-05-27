function openBrowser() {
    //open the window
    document.getElementById("browser").style.display = "block";
    //focus the window
    focusWindow("browser");
    //focus tab 0
    focusTab("tab0", "0");
    //load the page
    loadUrl();
}

function closeBrowser() {
    document.getElementById("browser").style.display = "none";
}

window.onload=checkEnter;
function checkEnter(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    console.log("the key that was pressed is " + keycode);
    if (keycode == 13) {
        loadUrl();
    }
}

//the number of tabs ever opened, tab IDs are based off of this
var numberOfTabs = 1;
//the number of tabs currently open
var remainingTabs = 1;
var tabs = [{tabNumber: 0, iframeNumber: 0, url: "http://www.scanurag.com"}, ]
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
    nTab.style.left = newTabPosition;
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
    document.getElementById("addTab").style.left = newTabPosition + 105;
    //Add a new entry to the tabs array
    tabs.push({tabNumber: numberOfTabs, iframeNumber: numberOfTabs, url: "http://www.scanurag.com"})
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
    var nFrame = document.createElement("iframe");
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
    document.getElementById(frameID).style.display = "block";
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
        tabs[i].style.left = i * 105 + 10;
    }
    document.getElementById("addTab").style.left = i * 105 + 10;
}

function loadUrl() {
    document.getElementById("reload-btn").classList.add("spin");
    var newUrl = document.getElementById("urlSource").value;
    tabs[selectedTab].url = newUrl;
    document.getElementById("frame" + selectedTab).src = newUrl;
    console.log("loaded " + newUrl + " on frame " + selectedTab);
}
    
function Reload () {
document.getElementById("reload-btn").classList.add("spin");
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