const productsArray = [

  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings"
  },
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
];


document.addEventListener("DOMContentLoaded", function () {
  const { paintingsArray, actionFiguresArray } = separateItems(productsArray);

  const pinturasList = document.querySelector(".paintings-list");
  const actionFiguresList = document.querySelector(".actionFigures-list");

  for (let i = 0; i < paintingsArray.length; i++) {
    pinturasList.appendChild(paintingsArray[i]);
  }

  for (let i = 0; i < actionFiguresArray.length; i++) {
    actionFiguresList.appendChild(actionFiguresArray[i]);
  }
});

function createElementProduct(product) {
  const item = document.createElement("li");
  item.classList.add("card");

  const image = document.createElement("img");
  image.classList.add('image');
  image.setAttribute("src", product.image);
  image.setAttribute("alt", product.name);

  const name = document.createElement("h3");
  name.classList.add('name')
  name.textContent = product.name;

  const price = document.createElement("p");
  price.classList.add('price');
  price.textContent = product.price;

  item.appendChild(image);
  item.appendChild(name);
  item.appendChild(price);

  return item;
}

function separateItems(productsArray) {
  const paintingsArray = [];
  const actionFiguresArray = [];

  for (let i = 0; i < productsArray.length; i++) {
    const product = productsArray[i];
    if (product.type === "Paintings") {
      const item = createElementProduct(product);
      paintingsArray.push(item);
    } else if (product.type === "Action Figures") {
      const item = createElementProduct(product);
      actionFiguresArray.push(item);
    }
  }

  return {
    paintingsArray,
    actionFiguresArray,
  };
}