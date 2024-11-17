const showMenu = document.querySelector(".fa-ellipsis-v");
const menu = document.querySelector(".menu");
const cardBtn = document.querySelector(".add-list");
const cardContainer = document.querySelector(".add-cards");
const mainSection = document.querySelector("main");
const homeButton = document.querySelector(".home-button");

showMenu.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else if (menu.style.display === "flex") {
    menu.style.display = "none";
  }
});

//add list functions

let card = `<div class="add-list-card">
          <textarea id="add-list-title" rows="4" cols="50" placeholder="Enter titile for this card ..."></textarea>
          <div class="action">
            <button class="add-list list-title">Add List</button>
            <i id="close" class="fas fa-times"></i>
          </div>`;

let list = `<div class="add-list-card">
          <textarea id="add-list-title" rows="4" cols="50" placeholder="Enter titile for this card ..."></textarea>
          <div class="action">
            <button class="add-list list-title">Add Card</button>
            <i id="close" class="fas fa-times"></i>
          </div>`;

cardBtn.addEventListener("click", () => {
  if (cardContainer.style.display === "none") {
    cardContainer.style.display = "flex";
    card = cardContainer.innerHTML = card;
    cardBtn.style.display = "none";
    updateUI();
  }
});

function updateUI() {
  const closeCard = document.querySelector("#close");

  closeCard.addEventListener("click", () => {
    if (cardContainer.style.display === "flex") {
      cardContainer.style.display = "none";
      cardContainer.innerHTML = card;
      cardBtn.style.display = "flex";
    }
  });

  const addListTitle = document.querySelector(".list-title");
  const textAreaInput = document.querySelector("#add-list-title");

  textAreaInput.addEventListener("change", (event) => {
    const title = event.target.value;
    addListTitle.addEventListener("click", () => {
      const listTitle = `
          <div class="list-card">
            <p class="title">${title}</p>
            <p class="add-card">+ Add Card</p>
            <div class="add-card-item" >
            </div>
          </div>
        `;
      homeButton.style.display = "none";
      cardContainer.innerHTML = listTitle;

      const addCard = document.querySelector(".add-card");

      addCard.addEventListener("click", () => {
        const cardItemInput = document.querySelector(".add-card-item");

        cardItemInput.style.display = "flex";
        cardItemInput.innerHTML = list;

        const closeCard = document.querySelector("#close");
        const addCard = document.querySelector(".add-card");

        closeCard.addEventListener("click", () => {
          cardItemInput.style.display = "none";
        });

        const cardValue = document.querySelector("#add-list-title");

        cardValue.addEventListener("change", (event) => {
          const item = event.target.value;
          
          const cardInput = `
            <input type="text" id="card-input" value=${item}>
          `;

          cardItemInput.style.display = "none";
          addCard.insertAdjacentHTML("beforebegin", cardInput);
        });
      });

      const addAnotherList = `
        <div >
          <button class="add-list another-list">Add Another List</button>
        </div>
      `;

      mainSection.insertAdjacentHTML("beforeend", addAnotherList);

      const addAnotherCard = document.querySelector(".another-list");
      addAnotherCard.addEventListener("click", () => {
        console.log(addAnotherCard);
      });
    });
  });
}
