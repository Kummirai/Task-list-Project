const showMenu = document.querySelector(".fa-ellipsis-v");
const menu = document.querySelector(".menu");
const cardBtn = document.querySelector(".add-list");
const cardContainer = document.querySelector(".add-cards");

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

//add list functions

let card = "";

cardBtn.addEventListener("click", () => {
  if (cardContainer.style.display === "none") {
    cardContainer.style.display = "flex";
    card = `<div class="add-list-card">
          <textarea rows="4" cols="50" placeholder="Enter titile for this card ..."></textarea>
          <div class="action">
            <button class="add-list btn">Add List</button>
            <i id="close" class="fas fa-times"></i>
          </div>`;

    cardContainer.innerHTML = card;
    updateUI();
  }
});

function updateUI() {
  const closeCard = document.querySelector("#close");

  closeCard.addEventListener("click", () => {
    if (cardContainer.style.display === "flex") {
      cardContainer.style.display = "none";
      card = " ";
      cardContainer.innerHTML = card;
    }
  });
}
