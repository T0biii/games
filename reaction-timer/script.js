let timer;
let startTime;

function startReactionTimer() {
    const message = document.getElementById('reaction-message');
    const main = document.querySelector('main'); // Target the <main> element for background color changes
    message.textContent = 'Wait for it...';
    main.style.backgroundColor = 'red'; // Red indicates waiting

    const delay = Math.random() * 3000 + 1000; // Random delay between 1-4 seconds
    timer = setTimeout(() => {
        message.textContent = 'Click now!';
        main.style.backgroundColor = 'green'; // Green indicates ready to click

        document.getElementById('reaction-button').onmousedown = () => {
            const reactionTime = Date.now() - startTime;
            message.textContent = `Your reaction time: ${reactionTime} ms`;
            main.style.backgroundColor = ''; // Reset background color
            document.getElementById('reaction-button').textContent = 'Restart';
            document.getElementById('reaction-button').onmousedown = startReactionTimer;
        };

        startTime = Date.now();
    }, delay);
}
