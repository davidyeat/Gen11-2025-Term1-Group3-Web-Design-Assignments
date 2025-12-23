// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;

// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keypress", handleEnterPasserord);

const instructionLabel = document.getElementById("instructionLabel");
 
// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

function showGame() {
  // You can use this function to dispaly the Game view
  if(localStorage.getItem("lost") === "true"){
    showLost();
    return;
  }

  hide(lostView);
  hide(wonView);
  show(passwordView);
  passwordInput.value = "";
  passwordInput.focus();
}

function showWin() {
  // You can use this function to dispaly the Win View
  hide(passwordView);
  show(wonView);
}
function showLost() {
  // You can use this function to dispaly the Lost View
  hide(passwordView);
  show(lostView);
}

function handleCheck() {
  // Manage your logic when the button is pressed
  if(parseInt(passwordInput.value) === SECRET_CODE){
    localStorage.setItem("won", "true");
    showWin();
  } else{
    chanceRemaining--;
    localStorage.setItem("attempts", chanceRemaining);

    instructionLabel.textContent = `Wrong password! You have ${chanceRemaining} attempts left.`;
    passwordInput.value = "";
    passwordInput.focus();

    if(chanceRemaining === 0){
      localStorage.setItem("lost", "true");
      showLost();
    }
  }
}

function handleEnterPasserord(event){
  if(event.key === "Enter"){
    handleCheck();
  }
}

// MAIN   ---------------------------------------------------------
let chanceRemaining = localStorage.getItem("attempts");

if(chanceRemaining === null){
  chanceRemaining = 3;
  localStorage.setItem("attempts", chanceRemaining);
} else {
  chanceRemaining = parseInt(chanceRemaining);
}

const won = localStorage.getItem("won");
const lost = localStorage.getItem("lost");

if(won === "true"){
  showWin();
}
else if(lost === "true") {
  showLost();
}
else {
  showGame();
}

