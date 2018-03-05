// Get the modal
var Browser = document.getElementById('BrowserApp');

// Get the button that opens the modal

// Get the <span> element that closes the modal
var Browserspan = document.getElementsByClassName("Browserclose")[0];

// When the user clicks the button, open the modal 
function openBrowser() {
    Browser.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
Browserspan.onclick = function() {
    Browser.style.display = "none";
}

function loadUrl() {
    document.getElementById("urlDisplay").src = document.getElementById("urlSource").value;
}
    
function Reload () {
var f = document.getElementById('urlDisplay');
f.src = f.src;
}
