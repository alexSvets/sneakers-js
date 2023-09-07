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
const template = document
  .getElementById("template-element")
  .content.querySelector(".sneakers__items");
const elements = document.querySelector(".elements");
const sneakersCurrency = document.querySelector(".sneakers__currency");
console.log(sneakersCurrency);
function generateInitionalItem(item) {
  const newItem = template.cloneNode(true);
  const likeImg = newItem.querySelector(".sneakers__liked");
  const sneakersImg = newItem.querySelector(".sneakers__img");
  const sneakersName = newItem.querySelector(".sneakers__name");
  const sneakersPrice = newItem.querySelector(".sneakers__price-count");
  const sneakersAdd = newItem.querySelector(".sneakers__add");
  sneakersImg.src = item.imageUrl;
  sneakersImg.alt = item.title;
  sneakersName.textContent = item.title;
  sneakersPrice.textContent = item.price;
  return newItem;
}

function addItem(element) {
  elements.prepend(generateInitionalItem(element));
}

cards.forEach((card) => {
  addItem(card);
});
