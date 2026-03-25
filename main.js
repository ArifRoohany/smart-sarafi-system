

function toggleSubmenu(menu, icon) {
document.getElementById(menu).classList.toggle("hidden");
document.getElementById(icon).classList.toggle("rotate-90");
}

function toggleDropdown(id){
document.getElementById(id).classList.toggle("hidden");
}

function toggleSidebar(){
let sidebar = document.getElementById("sidebar");
let content = document.getElementById("content");
let header = document.getElementById("header");

sidebar.classList.toggle("translate-x-full");

content.classList.toggle("pr-64");
content.classList.toggle("pr-0");

header.classList.toggle("w-full");
}
