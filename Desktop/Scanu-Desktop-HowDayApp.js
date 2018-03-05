// Get the modal
var HowDay = document.getElementById('HowDayApp');

// Get the button that opens the modal

// Get the <span> element that closes the modal
var HowDaySpan = document.getElementsByClassName("HowDayclose")[0];

// When the user clicks the button, open the modal 
function openHowDay() {
    HowDay.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
HowDaySpan.onclick = function() {
    HowDay.style.display = "none";
}

