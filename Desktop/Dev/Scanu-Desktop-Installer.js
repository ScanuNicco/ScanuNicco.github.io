function openInstaller() {
    document.getElementById('installer').style.display = "block";
    focusWindow("installer");
}

function closeInstaller() {
    document.getElementById('installer').style.display = "none";
}

var numberOfApps = 0;
function installApp() {
    numberOfApps++;
    var newAppID = "userApp" + numberOfApps;
    var newAppPath = document.getElementById('path').value;
    var newAppName = document.getElementById('name').value;
    var newAppWindow = document.createElement("div");
    var container = document.getElementById('desktopContent');
    newAppWindow.innerHTML = "<div class='header'><center><h3>" + newAppName + "</h3></center><button class='close' onclick='closeUserApp(\"" + newAppID + "\")'>&times;</button></div><iframe class='userAppFrame' frameborder='none' width='100%' height='100%' src='" + newAppPath +"'>";
    newAppWindow.id = newAppID;
    newAppWindow.classList.add("window")
    newAppWindow.setAttribute("onclick", "focusWindow('" + newAppID + "')");
    container.append(newAppWindow);
    var newDockIcon = document.createElement("button");
    newDockIcon.innerHTML = newAppName;
    newDockIcon.classList.add("dockIcon");
    newDockIcon.setAttribute("onclick", "openUserApp('" + newAppID + "')");
    document.getElementById('left-bar').append(newDockIcon);
    var newLauncherIcon = document.createElement("button");
    newLauncherIcon.innerHTML = newAppName;
    newLauncherIcon.classList.add("launcherIcon");
    newLauncherIcon.setAttribute("onclick", "openUserApp('" + newAppID + "')");
    document.getElementById('Menu').append(newLauncherIcon);
}

function openUserApp(appID){
    document.getElementById(appID).style.display = "block";
    focusWindow(appID);
}

function closeUserApp(appID) {
    document.getElementById(appID).style.display = "none";
}