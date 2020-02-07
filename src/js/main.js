let i = 0, multiplier = 0;
let invaderID, inviderElem;

let timeInterval = 50;

// make invaders visible with a certain time interval
function startGame() {
  let stop = setInterval(function () {
    invaderID = '#b' + i;

    inviderElem = document.querySelector(invaderID);
    inviderElem.style.left = multiplier * 50 + 'px';
    inviderElem.style.visibility = 'visible';
    i++;
    multiplier++;

    console.log(invaderID);

    if (multiplier == 11) multiplier = 0;

    if (i > 32) {
      clearInterval(stop);
    }
  }, timeInterval);
}