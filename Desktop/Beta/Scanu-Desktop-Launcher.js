// This is the file for the system toolbars like the launcher and logout menu
function openLauncher() {
    document.getElementById("Menu").style.display = 'block';
}

function closeLauncher() {
    document.getElementById("Menu").style.display = 'none';
}

function openLogOut() {
    document.getElementById("logOutMenu").style.display = 'block';
}

function closeLogOut() {
    document.getElementById("logOutMenu").style.display = 'none';
}

function openChannel() {
    document.getElementById("channelMenu").style.display = 'block';
}

function closeChannel() {
    document.getElementById("channelMenu").style.display = 'none';
}

function shutDown() {
    console.log("shutting down");
    document.getElementById("splashScreen").style.display = "block";
    setTimeout(turnOff, 2000);
}

function turnOff() {
    document.getElementById("content").style.background = "rgb(0, 0, 0)";
    document.getElementById("content").style.opacity = "0";
    document.getElementById("splashScreen").style.display = "none";
}
closeLogOut();

document.getElementById('desktopContent').onclick = function(e) {
  if(e.target != document.getElementById('logOutMenu') && e.target != document.getElementById('logOutButton')) {
      closeLogOut();
  } else {
      console.log('You clicked inside the logout menu');
  }
  if(e.target != document.getElementById('channelMenu') && e.target != document.getElementById('ChannelButton')) {
      closeChannel();
      console.log('You clicked outside the channel menu');
  } else {
      console.log('You clicked inside the channel menu');
  }
}