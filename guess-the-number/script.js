const randomNumber = Math.floor(Math.random() * 10) + 1;
function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess-input').value, 10);
    const result = document.getElementById('guess-result');
    if (userGuess === randomNumber) {
        result.textContent = 'Correct! You guessed the number!';
    } else {
        result.textContent = 'Wrong! Try again.';
    }
}
