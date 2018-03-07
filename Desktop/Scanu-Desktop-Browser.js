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
