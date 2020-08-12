var openBar = document.getElementById("open-bar");
var closeSign = document.getElementById("close");
var showSign = document.getElementById("show");
var navbarBtn = document.getElementById("navbarBtn");

function showMenu() {
  openBar.style.right = "50px";
  showSign.style.display = "none";
  closeSign.style.display = "block";
  navbarBtn.style.display = "none";
}

function closeMenu() {
  openBar.style.right = "-300px";
  showSign.style.display = "block";
  closeSign.style.display = "none";
  navbarBtn.style.display = "block";
}