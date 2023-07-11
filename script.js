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
document.addEventListener("DOMContentLoaded", function () { //evitar erros de carregamento

  const pinturasList = document.querySelector(".pinturas-lista");
  const actionFiguresList = document.querySelector(".figurasAcao-lista");

  
  const paintingsArray = [];
  const actionFiguresArray = [];

  
  function criarElementoProduto(produto) {
    const item = document.createElement("li");
    item.classList.add("card");

    const imagem = document.createElement("img");
    imagem.classList.add('imagem');
    imagem.setAttribute("src", produto.imagem);
    imagem.setAttribute("alt", produto.nome);

    const nome = document.createElement("h3");
    nome.classList.add('nome')
    nome.textContent = produto.nome;

    const preco = document.createElement("p");
    preco.classList.add('preco');
    preco.textContent = produto.preco;

    item.appendChild(imagem);
    item.appendChild(nome);
    item.appendChild(preco);

    return item;
  }

  function separateItems(produtosArray) {
    for (let i = 0; i < produtosArray.length; i++) {
      const produto = produtosArray[i];
      if (produto.tipo === "Pinturas") {
        const item = criarElementoProduto(produto);
        paintingsArray.push(item);
      } else if (produto.tipo === "Figuras de Ação") {
        const item = criarElementoProduto(produto);
        actionFiguresArray.push(item);
      }
    }
  }

  separateItems(produtosArray);

  for (let i = 0; i < paintingsArray.length; i++) {
    pinturasList.appendChild(paintingsArray[i]);
  }

  for (let i = 0; i < actionFiguresArray.length; i++) {
    actionFiguresList.appendChild(actionFiguresArray[i]);
  }
});
