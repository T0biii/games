let randomNumber;

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
}

generateRandomNumber();

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess-input').value, 10);
    const result = document.getElementById('guess-result');
    if (userGuess === randomNumber) {
        result.textContent = `Correct! You guessed the number ${randomNumber}!`;
        generateRandomNumber();
    } else {
        result.textContent = `Wrong! The number was ${randomNumber}. Try again.`;
        generateRandomNumber();
    }
}
