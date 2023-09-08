const cards = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "../img/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: "../img/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "../img/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "../img/4.jpg",
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8 ",
    price: 15199,
    imageUrl: "../img/5.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 11299,
    imageUrl: "../img/6.jpg",
  },
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 10799,
    imageUrl: "../img/7.jpg",
  },
  {
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: 16499,
    imageUrl: "../img/8.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: 13999,
    imageUrl: "../img/9.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "../img/4.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: 11299,
    imageUrl: "../img/2.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "../img/7.jpg",
  },
];

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

function addElement(element) {
  elements.prepend(generateItem(element));
}

cards.forEach((card) => {
  addElement(card);
});

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

cartButton.addEventListener("click", openCart);
cartButtonBack.addEventListener("click", closeCart);
cart.addEventListener("mousedown", closeCartOverlay);
