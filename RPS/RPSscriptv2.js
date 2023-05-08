function compPlay() {
  const compChoice = Math.floor(Math.random() * 3);
  if (compChoice === 0) {
    return 'rock';
  } else if (compChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getResult(compChoice, pChoice) {
  if (pChoice === compChoice) {
    return 'Tied!';
  }
  if ((pChoice === 'rock' && compChoice === 'scissors') || (pChoice === 'paper' && compChoice === 'rock') || (pChoice === 'scissors' && compChoice === 'paper')) {
    return 'Win!';
  } else {
    return 'Lose!';
  }
}

const pick = document.querySelectorAll('li img');
pick.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const compPick = compPlay();
    const pPick = pil.className;
    const result = getResult(compPick, pPick);

    const compImg = document.querySelector('.compImg');
    compImg.setAttribute('src', 'img/' + compPick + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = result;
  });
});
