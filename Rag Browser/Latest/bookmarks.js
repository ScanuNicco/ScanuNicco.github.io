var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
if (bookmarks == null){
	bookmarks = [{name: "Scanu Productions", url: "http://scanurag.com", id: 0}];
	console.log("Added Default Bookmarks");
}

function scanEntries() {
	//Remove all existing bookmark elements
	document.getElementById("bookmarksContainer").innerHTML = "";
	//loop runs for each item in the array bookmarks
	for (i=0; i<bookmarks.length; i++){
		//create new element
		var nBook = document.createElement("div");
		//generate the content
		nBook.innerHTML = (i + 1) + " - " + bookmarks[i].name + " - " + bookmarks[i].url + "<br>";
		//add the url to the bookmark so that it opens when clicked
		nBook.setAttribute("onclick", "selectBookmark('" + bookmarks[i].id + "')");
		//add the bookmark class to the new element
		nBook.classList.add("managerBookmarks");
		//add an id
		nBook.id = "bookmark" + bookmarks[i].id;
		//define the container
		var container = document.getElementById("bookmarksContainer");
		//add the new element to the container
		container.appendChild(nBook);
	}
}

var selectedBookmark = 0;
var entries = document.getElementsByClassName("managerBookmarks");
function selectBookmark(bookmarkId){
	selectedBookmark = bookmarkId;
	for (i=0; i<entries.length; i++) {
		entries[i].style.background = "white";
	}
	document.getElementById("bookmark" + bookmarkId).style.background = "lightblue";
}

function moveBookmark(direction) {
	var location = index("id", selectedBookmark);
	console.log(location);
	if (direction == "up"){
		swap(location, (location - 1));
	} else if (direction == "down"){
		swap(location, (location + 1));
	}
	scanEntries();
	selectBookmark(selectedBookmark);
	localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function index(key, valuetosearch) {

    for (var i = 0; i < bookmarks.length; i++) {
    	if (bookmarks[i][key] == valuetosearch) {
    		return i;
    	}
    }
    return null;
}

function swap(indexA, indexB) {
	console.log(indexA, indexB);
    var temp = bookmarks[indexA];
    bookmarks[indexA] = bookmarks[indexB];
    bookmarks[indexB] = temp;
}

function deleteBookmark(){
	var location = index("id", selectedBookmark);
	bookmarks.splice (location, location);
	scanEntries();
	localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
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
scanEntries();