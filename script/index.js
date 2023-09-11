const template = document.getElementById("template-element").content;
const elements = document.querySelector(".elements");
const cart = document.querySelector(".cart");
const cartButton = document.querySelector(".header__img_type-cart");
const cartButtonBack = document.querySelector(".cart__button");

// generate card
function generateItem(item) {
  const newItem = template.querySelector(".sneakers__items").cloneNode(true);
  const sneakersImg = newItem.querySelector(".sneakers__img");
  const sneakersName = newItem.querySelector(".sneakers__name");
  const sneakersPriceCount = newItem.querySelector(".sneakers__price-count");
  sneakersImg.src = item.imageUrl;
  sneakersImg.alt = item.title;
  sneakersName.textContent = item.title;
  sneakersPriceCount.textContent = item.price;
  return newItem;
}

// fetch card api
function getAllCard() {
  return fetch("https://64fb1cdbcb9c00518f7aa909.mockapi.io/sneakers")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.resolve(
        `У вас случилась ошибка со статусом ${res.status}`
      );
    })
    .then((data) => {
      data.forEach((card) => {
        addElement(card);
      });
    });
}

function addElement(element) {
  elements.prepend(generateItem(element));
}

//  open/close cart
function closeCartOverlay(event) {
  if (event.target.classList.contains("cart") || event.keyCode == 27) {
    closeCart(event.target);
  }
}

function closeCartEsc(event) {
  if (event.keyCode === 27) {
    closeCart(event.target);
  }
}

function closeCart() {
  cart.classList.remove("cart_is-opened");
  document.removeEventListener("keydown", closeCartEsc);
}

function openCart() {
  cart.classList.add("cart_is-opened");
  document.addEventListener("keydown", closeCartEsc);
}

getAllCard();

cartButton.addEventListener("click", openCart);
cartButtonBack.addEventListener("click", closeCart);
cart.addEventListener("mousedown", closeCartOverlay);
