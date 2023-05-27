const botoes = document.querySelectorAll('.botoes-filtros button');
const cards = document.querySelectorAll('.cards__container .card');


botoes.forEach((botao) => {
  botao.addEventListener('click', (element) => {
    document.querySelector('.active').classList.remove('active');
    botao.classList.add('active');
    
    cards.forEach((card) => {
      card.classList.add('hide');
      
      if(element.target.dataset.name === card.dataset.name || element.target.dataset.name === 'todos') {
        card.classList.remove('hide');
      }
    });
 
  });


});