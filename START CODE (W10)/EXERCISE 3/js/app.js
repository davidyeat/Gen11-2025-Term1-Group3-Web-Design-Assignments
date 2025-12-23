const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {
 
  // 1 - Random color for card
  let cardColor = randomColor();
   
  // 2 - Set card text
  const cardText = "Hello";
  
  // 3 - Set card footer
  const cardFooter = document.createElement('div');
  cardFooter.className = 'card-footer';

  const card = document.createElement('div');
  card.className = 'card';
  card.style.backgroundColor = cardColor;
  
  //  4 - Manage footer button
  const button = document.createElement('button');
  button.textContent = 'Remove Card';
  button.addEventListener("click", function () {
    card.remove();
  });

  // 5 - Add card to containers
  const container = document.querySelector('.container');
  const p = document.createElement('p');
  p.textContent = cardText;

  cardFooter.appendChild(button);
  card.appendChild(p);
  card.appendChild(cardFooter);
  container.appendChild(card);
}


//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);
