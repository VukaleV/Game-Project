# Memory Game Planning

## Goal
Create a simple memory card game using **HTML, CSS, and JavaScript**.  
The game will have a grid of cards that players flip to find matching pairs.  

## Steps

1. **Setup HTML structure**
   - Create a game container.
   - Add card elements inside the container.
   - Each card has a front (hidden) and a back (with an image or symbol).

2. **Style with CSS**
   - Define layout: grid of cards.
   - Add styles for card front and back.
   - Use CSS transitions for flip effect.

3. **Game logic with JavaScript**
   - Shuffle cards at the start.
   - Add click event listeners to cards.
   - On click:
     - Flip the card.
     - Store the flipped card in a temporary array.
   - If two cards are flipped:
     - Check if they match.
       - If match → keep them visible.
       - If not → flip them back after short delay.
   - Track matched pairs.
   - The more matched pairs, 'Score' should be higher.
   - When press 'Restar' button, shuffle them all and start from begging. 
   - End game when all pairs are found.