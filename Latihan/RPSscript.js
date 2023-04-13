function play() {
    pChoice = document.getElementById('player-choice').value;

    // Modified random choice 
    compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        compChoice = 'rock';
    } else if (compChoice === 1) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    }

    // buncha if statements

    if (pChoice === compChoice) {
        result = "It's a tie!";
    } else if ((pChoice === 'rock' && compChoice === 'scissors') ||
        (pChoice === 'paper' && compChoice === 'rock') ||
        (pChoice === 'scissors' && compChoice === 'paper')) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    // Output
    alert(`You chose ${pChoice}. Computer chose ${compChoice}. ${result}`);
    document.getElementById('result').innerHTML = `You chose ${pChoice}. Computer chose ${compChoice}. ${result}`
}