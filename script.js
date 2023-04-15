const numberBox = document.getElementById('number');
const guess1 = document.getElementById('guess1');
const guess2 = document.getElementById('guess2');
const checkBtn = document.getElementById('check');
const message = document.getElementById('message');

// Generate a random number between 1 and 100 for the center box
let randomNumber = Math.floor(Math.random() * 10) + 1;
numberBox.innerText = randomNumber;

function checkGuesses() {
  let guess1Value = parseInt(guess1.value);
  let guess2Value = parseInt(guess2.value);

  if (guess1Value === randomNumber - 1 && guess2Value === randomNumber + 1) {
    // If both guesses are correct, show a success message and generate a new random number
    numberBox.innerText = Math.floor(Math.random() * 10) + 1;
    guess1.value = "";
    guess2.value = "";
    checkBtn.classList.remove("wrong");
    message.innerText = "Congratulations, you guessed correctly!";
    randomNumber = parseInt(numberBox.innerText);
  } else {
    // If at least one guess is incorrect, show a failure message and change the color of the Check button to red
    checkBtn.classList.add("wrong");
    message.innerText = "Sorry, your guess is incorrect. Please try again.";
  }
}

checkBtn.addEventListener('click', checkGuesses);

