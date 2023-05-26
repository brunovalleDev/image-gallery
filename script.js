const botoesFiltros = document.querySelectorAll('.botoes-filtros button');
const cards = document.querySelectorAll('.cards__container .card');

//adicionando evento de clique para cada botão

botoesFiltros.forEach((botao) => {
  botao.addEventListener("click", (element) => {
    document.querySelector('.active').classList.remove('active');
    element.target.classList.add('active');

    cards.forEach((card) => {
      card.classList.add('hide');

      if(card.dataset.name === element.target.dataset.name || element.target.dataset.name === "todos") {
        card.classList.remove('hide');
      }
    });
  });
});