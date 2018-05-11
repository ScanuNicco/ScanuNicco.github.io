function openHowDay() {
    document.getElementById("howDay").style.display = "block";
    focusWindow("howDay");
}

function closeHowDay() {
    document.getElementById("howDay").style.display = "none";
}

var NumberOfWords = 19

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "Excellent"
words[2] = "Amazing"
words[3] = "Decent"
words[4] = "Splended"
words[5] = "Swell"
words[6] = "Delightful"
words[7] = "Superb"
words[8] = "Great"
words[9] = "Exceptional"
words[10] = "Fine"
words[11] = "Acceptable"
words[12] = "Pleasant"
words[13] = "Awesome"
words[14] = "Wonderful"
words[15] = "Nice"
words[16] = "Satisfying"
words[17] = "Splendid"
words[18] = "Pleasing"
words[19] = "Perfect"

var words2 = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words2[1] = "Atrocious"
words2[2] = "Awful"
words2[3] = "Dreadful"
words2[4] = "Lousy"
words2[5] = "Unacceptable"
words2[6] = "Terrible"
words2[7] = "Horrible"
words2[8] = "Unpleasant"
words2[9] = "Unsatisfying"
words2[10] = "Unhappy"
words2[11] = "Horrendous"
words2[12] = "Ghastly"
words2[13] = "Disastrous"
words2[14] = "Inconvenient"
words2[15] = "Obnoxious"
words2[16] = "Abominable"
words2[17] = "Rotten"
words2[18] = "Frightful"
words2[19] = "Painful"
        
   

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
// Display the word inside the text box
frm.WordBox.value = words[rnd]
    
document.getElementById("Warning").style.visibility = "hidden";
}
        
function PickRandomWord2(frm2) {
// Generate a random number between 1 and NumberOfWords
var rnd2 = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
// Display the word inside the text box
frm2.WordBox.value = words2[rnd2]
    
document.getElementById("Warning").style.visibility = "visible";
}
    
function Hide_Warning(){
    document.getElementById("Warning").style.visibility = "hidden";
  }
        
function Show_Warning(){
    document.getElementById("Warning").style.visibility = "visible";
  }