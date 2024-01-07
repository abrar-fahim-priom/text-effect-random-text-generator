function generateRandomWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function updateOutput() {
    fetch('./tags.txt')
        .then(response => response.text())
        .then(data => {
            const words = data.split(',');
            const outputElement = document.getElementById('output');
            outputElement.textContent = generateRandomWord(words);
        })
        .catch(error => console.error('Error fetching word list:', error));
}

function handleButtonClick() {
    updateOutput();
}

document.getElementById('generateButton').addEventListener('click', handleButtonClick);

// Add event listener for the spacebar key
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        // Prevent spacebar from scrolling the page
        event.preventDefault();
        
        // Trigger the button click event
        handleButtonClick();
    }
});