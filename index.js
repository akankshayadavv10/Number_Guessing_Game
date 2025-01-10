let targetNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let guessedNumbers = [];

function play() {
    const guessInput = document.getElementById("guess");
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    attempts++;
    guessedNumbers.push(guess);

    if (guess === targetNumber) {
        document.getElementById("message3").textContent = `Congratulations! You guessed it right in ${attempts} attempts.`;
    } else if (attempts >= 4) {
        document.getElementById("message3").textContent = `Sorry, you've reached the maximum number of attempts. The correct number was ${targetNumber}.`;
    } else {
        document.getElementById("message1").textContent = `No. of guesses: ${attempts}`;
        document.getElementById("message2").textContent = `Guessed numbers: ${guessedNumbers.join(", ")}`;
        document.getElementById("guess").value = "";
    }
}
