function openNav() {
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("body").style.marginLeft = "250px";
document.getElementById("mySidenav").style.opacity = "1";
document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("body").style.marginLeft = "0";
document.getElementById("mySidenav").style.opacity = "0"; 
document.body.style.backgroundColor = "white";
}

