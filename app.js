import {cards} from "./data/cards.js";

const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');

const gridContainer = document.querySelector('.grid-container');
const scoreEl = document.getElementById('score');
const resetBtn = document.getElementById('resetbtn');

let score = 0;
let boardCards = [];

// Start screen logic
startButton.addEventListener('click', () => {
  startScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  initBoard();
});

// Funkcija za update score-a
function updateScore(points) {
  score += points;
  scoreEl.textContent = `Score: ${score}`;
}

// Funkcija za reset score-a
function resetScore() {
  score = 0;
  scoreEl.textContent = `Score: ${score}`;
}

// Original game logic
function initBoard() {
  gridContainer.innerHTML = '';


  function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

  const items = cards.flatMap(c => [c, c]); 
  shuffle(items);
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

    cardEl.addEventListener('click', () => {
      if (card.matched || cardEl.classList.contains('flipped')) return;

      cardEl.classList.add('flipped');

      const flippedCards = document.querySelectorAll('.card.flipped:not(.matched)');

      if (flippedCards.length === 2) {
        const [first, second] = flippedCards;
        const firstId = first.dataset.id;
        const secondId = second.dataset.id;

        if (boardCards[firstId].symbol === boardCards[secondId].symbol) {
          boardCards[firstId].matched = true;
          boardCards[secondId].matched = true;
           first.classList.add('matched');
           second.classList.add('matched');
         updateScore(10);

        } else {
          setTimeout(() => {
            first.classList.remove('flipped');
            second.classList.remove('flipped');
          }, 800);
        }
      }
    });
 
    gridContainer.appendChild(cardEl);
  });
}

// Reset button
resetBtn.addEventListener('click', () => {
  resetScore(); // postavlja "Score: 0"
  initBoard();
});

// Initialize board on page load (if needed)
document.addEventListener('DOMContentLoaded', () => {
  // board will initialize only after start screen
});
