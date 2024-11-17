const showMenu = document.querySelector(".fa-ellipsis-v");
const menu = document.querySelector(".menu");
const cardBtn = document.querySelector(".add-list");
const cardContainer = document.querySelector(".add-cards");

showMenu.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else if (menu.style.display === "flex") {
    menu.style.display = "none";
  }
});

//add list functions

let card = "";

cardBtn.addEventListener("click", () => {
  if (cardContainer.style.display === "none") {
    cardContainer.style.display = "flex";
    card = `<div class="add-list-card">
          <textarea id="add-list-title" rows="4" cols="50" placeholder="Enter titile for this card ..."></textarea>
          <div class="action">
            <button class="add-list list-title">Add List</button>
            <i id="close" class="fas fa-times"></i>
          </div>`;

    cardContainer.innerHTML = card;
    cardBtn.style.display = "none";
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
      cardBtn.style.display = "flex";
    }
  });

  const addListTitle = document.querySelector(".list-title");
  const textAreaInput = document.querySelector("#add-list-title");

  textAreaInput.addEventListener("input", (event) => {
    const title = event.target.value;
    addListTitle.addEventListener("click", () => {
      const listTitle = `
          <div>
            <h2>${title}</h2>
            <p>+ Add Card</p>
            </div>
        `;
      console.log(title);

      cardContainer.innerHTML = listTitle;
    });
  });
}
