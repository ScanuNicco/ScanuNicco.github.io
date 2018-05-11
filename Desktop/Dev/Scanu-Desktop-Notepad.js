function openNotepad() {
    document.getElementById("notepadApp").style.display = 'block';
    focusWindow("notepadApp");
}

function closeNotepad() {
    document.getElementById("notepadApp").style.display = 'none';
}

closeNotepad();

function drag_start(event) {
    var notepadstyle = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("body",
    (parseInt(notepadstyle.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(notepadstyle.getPropertyValue("top"),10) - event.clientY));
} 
function drag_over(event) { 
    event.preventDefault(); 
    return false; 
} 
function drop(event) { 
    var notepadoffset = event.dataTransfer.getData("body").split(',');
    var dragNotepad = document.getElementById('notepadApp');
    dragNotepad.style.left = (event.clientX + parseInt(notepadoffset[0],10)) + 'px';
    dragNotepad.style.top = (event.clientY + parseInt(notepadoffset[1],10)) + 'px';
    event.preventDefault();
    return false;
} 
var dragNotepad = document.getElementById('notepadApp'); 
dragNotepad.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false); 

//<![CDATA[
window.onload=function(){
(function () {
var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };


  var create = document.getElementById('create'),
    textbox = document.getElementById('notepadContent');

  create.addEventListener('click', function () {
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(textbox.value);
    link.style.display = 'block';
  }, false);
})();

}//]]> 
