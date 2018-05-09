function openBrowser() {
    document.getElementById("browser").style.display = "block";
}

function closeBrowser() {
    document.getElementById("browser").style.display = "none";
}

function loadUrl() {
    document.getElementById("urlDisplay").src = document.getElementById("urlSource").value;
}
    
function Reload () {
var f = document.getElementById('urlDisplay');
f.src = f.src;
}

window.onload=checkEnter;
function checkEnter(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    console.log("the key that was pressed is " + keycode);
    if (keycode == 13) {
        document.getElementById("urlSource").onkeydown = loadUrl; //no parentheses
    }
}