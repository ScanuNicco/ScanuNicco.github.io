//Set the default background and set it as the background
var background = "url(Images/Scanu-Desktop-Background-3.jpg)";
document.body.style.backgroundImage = background;


//Get the user input and set it as the new background
function refreshBackground() {
    var backgroundinput = document.getElementById("Background").value;
    var background = "url(" + backgroundinput + ")"
    document.body.style.backgroundImage = background;
}

function headerColor(color) {
    var header = document.getElementsByClassName('header');
    for(i=0; i<header.length; i++) {
        header[i].style.backgroundColor =    color;
    }
}

function borderRadius() {
    var roundedCorners = document.getElementById("borderRadiusInput").value;
    console.log("Changing Border Radius To " + roundedCorners);
    var window = document.getElementsByClassName('window');
    for(i=0; i<window.length; i++) {
        window[i].style.borderRadius = roundedCorners + "px";
        console.log("New radius applied to " + i + " elements");
    }
}

function openSettings() {
    document.getElementById("settings").style.display = "block";
}

function closeSettings() {
    console.log("closing settings")
    document.getElementById("settings").style.display = "none";
    console.log("settings closed")
}

function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("body",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
} 
function drag_over(event) { 
    event.preventDefault(); 
    return false; 
} 
function drop(event) { 
    var offset = event.dataTransfer.getData("body").split(',');
    var dm = document.getElementById('settings');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
} 
var dm = document.getElementById('settings'); 
dm.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false); 

function openHeaderColor() {
    document.getElementById("chooseHeaderColor").style.display = "block";
}

function closeHeaderColor() {
    document.getElementById("chooseHeaderColor").style.display = "none";
}