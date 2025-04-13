let timer;
let startTime;

function startReactionTimer() {
    const message = document.getElementById('reaction-message');
    const button = document.getElementById('reaction-button');
    message.textContent = 'Wait for it...';
    button.disabled = true;
    button.style.backgroundColor = 'red'; // Red indicates waiting

    const delay = Math.random() * 3000 + 1000; // Random delay between 1-4 seconds
    timer = setTimeout(() => {
        message.textContent = 'Click now!';
        button.disabled = false;
        button.style.backgroundColor = 'green'; // Green indicates ready to click

        button.onmousedown = () => {
            const reactionTime = Date.now() - startTime;
            message.textContent = `Your reaction time: ${reactionTime} ms`;
            button.textContent = 'Restart';
            button.style.backgroundColor = '';
            button.onmousedown = startReactionTimer;
        };

        startTime = Date.now();
    }, delay);
}
