let i = 0;
let invaderID, inviderElem;

let timeInterval = 50;

// make invaders visible with a certain time interval
function startGame() {
  let stop = setInterval(function () {
    invaderID = '#b' + i;

    inviderElem = document.querySelector(invaderID);
    inviderElem.style.left = i * 50 + 'px';
    inviderElem.style.visibility = 'visible';
    i++;
    
    console.log(invaderID);

    if (i > 10) {
      clearInterval(stop);
    }
  }, timeInterval);
}