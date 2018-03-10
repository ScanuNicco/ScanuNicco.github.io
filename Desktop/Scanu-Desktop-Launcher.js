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

closeLogOut();

document.getElementById('desktopContent').onclick = function(e) {
  if(e.target != document.getElementById('logOutMenu') && e.target != document.getElementById('logOutButton')) {
      closeLogOut();
  } else {
      console.log('You clicked inside');
  }
}