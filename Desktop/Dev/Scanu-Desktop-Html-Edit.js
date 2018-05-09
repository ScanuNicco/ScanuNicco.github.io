function openEditHtml() {
    document.getElementById("editHtmlApp").style.display = 'block';
}

function closeEditHtml() {
    document.getElementById("editHtmlApp").style.display = 'none';
}

closeEditHtml()

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
    var dragHtml = document.getElementById('editHtmlApp');
    dragHtml.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dragHtml.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
} 
var dragHtml = document.getElementById('editHtmlApp'); 
dragHtml.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false); 

    
function runPreview() {
    var input = document.getElementById("input").value;
    document.getElementById("preview").innerHTML = input;
}

function runCode() {
    var input = document.getElementById("input").value;
    var new_window = window.open();
    new_window.document.open();
    new_window.document.write(input);
}
    
function downloadHtml() {
    var hiddenElement = document.createElement('a');
    var downloadInput = document.getElementById('preview').innerHTML;
    
    hiddenElement.href = 'data:attachment/text,' + encodeURI(downloadInput);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'myHtml.html';
    hiddenElement.click();
}

function uploadFile() {
    var fileContent = document.getElementById("file").value;
    document.getElementById('input').innerHTML = fileContent;
    alert(fileContent);
}
    
document.getElementById('input-file')
  .addEventListener('change', getFile)

function getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      document.getElementById('input'),
      input.files[0])
  }
}

function placeFileContent(target, file) {
	readFileContent(file).then(content => {
  	target.value = content
  }).catch(error => console.log(error))
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}

function displayColor() {
    console.log("getting color");
    var colorInput = document.getElementById("colorInputElement").value;
    console.log("showing window");
    document.getElementById("container").style.display = "block";
    console.log("Displaying Color Code");
    document.getElementById("colorDisplay").value = colorInput;
 }
 
function copyToClipboard() {  
  var copyText = document.getElementById("colorDisplay");
  copyText.select();
  document.execCommand("Copy");
}