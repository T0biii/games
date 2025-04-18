const board = Array(9).fill(null);
let currentPlayer = 'X';

function renderBoard() {
    const gameBoard = document.getElementById('game-board');
    const currentPlayerDisplay = document.getElementById('current-player');
    gameBoard.innerHTML = '';
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        cellElement.textContent = cell;
        cellElement.onclick = () => makeMove(index);
        gameBoard.appendChild(cellElement);
    });
    currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;
}

function makeMove(index) {
    if (!board[index]) {
        board[index] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        renderBoard();
        checkWinner();
    }
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popup.classList.remove('hidden');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            showPopup(`${board[a]} wins!`);
            resetGame();
            return;
        }
    }
    if (!board.includes(null)) {
        showPopup('It\'s a draw!');
        resetGame();
    }
}

function resetGame() {
    board.fill(null);
    currentPlayer = 'X';
    renderBoard();
}

document.addEventListener('DOMContentLoaded', renderBoard);
