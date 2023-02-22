let openButton = document.querySelector(".open-btn");
let closeButton = document.querySelector(".close-btn");
let sidebar = document.getElementById("sideBar");
let sidebarLeft = document.getElementById("open-sideBar");

const openSidebar = () => {
  sidebar.style.width = "200px";
  sidebarLeft.style.marginLeft = "200px";
};

const closeSidebar = () => {
  sidebar.style.width = "0";
  sidebarLeft.style.marginLeft = "0";
};

openButton.addEventListener("click", openSidebar);
closeButton.addEventListener("click", closeSidebar);
