function isMobileDevice() {
  return /Mobi/i.test(navigator.userAgent);

  // Fungsi isMobileDevice() menggunakan ekspresi reguler /Mobi/i
  // untuk mencocokkan string "Mobi" dalam user agent string.
  // Jika cocok, itu berarti perangkat client adalah perangkat mobile.
}

// Eksekusi kode setelah halaman selesai dimuat
window.onload = function () {
  var deviceElement = document.getElementById("device");

  if (isMobileDevice()) {
    deviceElement.innerHTML = "On Mobile";
  } else {
    deviceElement.innerHTML = "On Desktop";
  }
};

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
const fileName = window.location.pathname.split("/").pop();
if (fileName==='RPSv2.html'){
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
} else if (fileName === 'RPS.html'){
  function play(){
  const pPick = document.getElementById('player-choice').value;
  const compPick = compPlay();
  const result = getResult(compPick, pPick);
  alert(`You chose ${pPick}. Computer chose ${compPick}. ${result}`);
  document.getElementById('result').innerHTML = `You chose ${pPick}. Computer chose ${compPick}. ${result}`
  }
}else {
  alert('Error : File not Found');
}



