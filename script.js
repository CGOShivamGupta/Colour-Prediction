function getRandomResponse() {
    const responses = ["Big", "Small"];
    return responses[Math.floor(Math.random() * responses.length)];
}

function checkNumber() {
    const input = document.getElementById('number-input').value;
    const ballResult = document.getElementById('ball-result');
    const response = document.getElementById('response');

    const number = parseInt(input, 10);

    if (isNaN(number) || number < 0 || number > 999) {
        alert('Please enter a number between 000 and 999.');
        return;
    }

    ballResult.textContent = input;
    response.textContent = getRandomResponse();
}