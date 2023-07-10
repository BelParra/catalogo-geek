const produtosArray = [

  {
    imagem: "./assets/img/paintings/quadro-c3po.jpg",
    nome: "Robot",
    preco: "R$250,00",
    tipo: "Pinturas",
  },
  {
    imagem: "./assets/img/paintings/quadro-controle.jpg",
    nome: "Controle Playstation",
    preco: "R$99,00",
    tipo: "Pinturas"
  },
  {
    imagem: "./assets/img/paintings/quadro-mario.jpg",
    nome: "Mario",
    preco: "R$275,00",
    tipo: "Pinturas",
  },
  {
    imagem: "./assets/img/paintings/quadro-pacman.jpg",
    nome: "PacMan",
    preco: "R$160,00",
    tipo: "Pinturas",
  },
  {
    imagem: "./assets/img/paintings/quadro-relogio.jpg",
    nome: "Smart Watch",
    preco: "R$120,00",
    tipo: "Pinturas",
  },
  {
    imagem: "./assets/img/actions/dragonball-action-figure.jpg",
    nome: "Goku Super Saiyajin",
    preco: "R$500,00",
    tipo: "Figuras de Ação",
  },
  {
    imagem: "./assets/img/actions/godzilla-action-figure.jpg",
    nome: "Godzilla",
    preco: "R$700,00",
    tipo: "Figuras de Ação",
  },
  {
    imagem: "./assets/img/actions/groot-action-figure.jpg",
    nome: "Groot",
    preco: "R$950,00",
    tipo: "Figuras de Ação",
  },
  {
    imagem: "./assets/img/actions/ironman-action-figure.jpg",
    nome: "Homem de Ferro",
    preco: "R$1030,00",
    tipo: "Figuras de Ação",
  },
  {
    imagem: "./assets/img/actions/starwars-action-figure.jpg",
    nome: "Sr Yoda",
    preco: "R$870,00",
    tipo: "Figuras de Ação",
  },
  {
    imagem: "./assets/img/actions/wolverine-action-figure.jpg",
    nome: "Wolverine",
    preco: "R$510,00",
    tipo: "Figuras de Ação",
  },

];


document.addEventListener("DOMContentLoaded", function () {
  const pinturasList = document.querySelector(".pinturas-lista");
  const actionFiguresList = document.querySelector(".figurasAcao-lista");

  // Função para criar um item de produto
  function criarElementoProduto(produto) {
    const item = document.createElement("li");
    item.classList.add("card");

    const imagem = document.createElement("img");
    imagem.setAttribute("src", produto.imagem); // Utilizando "imagem" em vez de "image"
    imagem.setAttribute("alt", produto.nome);

    const nome = document.createElement("h2");
    nome.textContent = produto.nome;

    const preco = document.createElement("p");
    preco.textContent = produto.preco;

    item.appendChild(imagem);
    item.appendChild(nome);
    item.appendChild(preco);

    return item;
  }

  //Pinturas
  function adicionarPintura(produto) {
    const item = criarElementoProduto(produto);
    pinturasList.appendChild(item);
  }

  //Figuras de Acção
  function adicionarFigAcao(produto) {
    const item = criarElementoProduto(produto);
    actionFiguresList.appendChild(item);
  }

  // Adicionar às listas correspondentes

  for (let i = 0; i < produtosArray.length; i++) {
    const produto = produtosArray[i];
    if (produto.tipo === "Pinturas") {
      adicionarPintura(produto);
    } else if (produto.tipo === "Figuras de Ação") {
      adicionarFigAcao(produto);
    }
  }
});
