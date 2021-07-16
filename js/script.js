// SHOW HEADER MENU
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("nav-menu", "nav-toggle");

// REMOVE HEADER MENU WHEN WE CLICK NAV-LINK
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  // link active
  navLink.forEach((e) => e.classList.remove("active"));
  this.classList.add("active");

  // remove header menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

// SWIPPER BEST PLACES
