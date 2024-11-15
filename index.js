const showMenu = document.querySelector(".fa-ellipsis-v");
const menu = document.querySelector(".menu");

const menuShown = () => {
  menu.style.display = "flex";
};

const hideMenu = () => {
  menu.style.display = "none";
};

showMenu.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menuShown();
  } else if (menu.style.display === "flex") {
    hideMenu();
  }
});
