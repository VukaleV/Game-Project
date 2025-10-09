import {cards} from "./data/cards.js";

const gridContainer = document.querySelector('.grid-container');
const scoreEl = document.getElementById('score');
const resetBtn = document.getElementById('resetbtn');


let score = 0;
let boardCards = [];


function initBoard() {
  gridContainer.innerHTML = '';
 
  const items = cards.flatMap(c => [c, c]); 

  boardCards = items.map((item, idx) => ({
    id: idx,
    symbol: item.name,
    image: item.image,
    matched: false
  }));

  boardCards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    cardEl.dataset.id = card.id;

    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${card.image})`; 

    cardEl.appendChild(front);
    cardEl.appendChild(back);

   
    cardEl.addEventListener('click', () => handleCardClick(card, cardEl));

    gridContainer.appendChild(cardEl);
  });
}


resetBtn.addEventListener('click', () => {
  score = 0;
  scoreEl.textContent = score;
  initBoard();
});

document.addEventListener('DOMContentLoaded', initBoard);
