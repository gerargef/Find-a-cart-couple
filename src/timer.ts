let sec: number = 0;
let min: number = 0;
let timerID: NodeJS.Timeout;
// const cardField = document.querySelector(".card-field") as Element;
// const cardFieldTimer = cardField.querySelector('.card-field__timer') as Element;

export const startTimer = () => {
  timer();
}

export const stopTimer = () => {
  const cardField = document.querySelector(".card-field") as Element;
const cardFieldTimer = cardField.querySelector('.card-field__timer') as Element;

 cardFieldTimer.textContent = '00:00';
  clearTimeout(timerID);
  const finalTime = (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
  sec = 0;
  min = 0;
  return finalTime;
}

function tick(){
  sec++;
  if (sec >= 60) {
      sec = 0;
      min++;
  }
}

function add() {
  tick();
  const cardField = document.querySelector(".card-field") as Element;
const cardFieldTimer = cardField.querySelector('.card-field__timer') as Element;

  cardFieldTimer.textContent = (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
  timer();
}

function timer() {
  timerID = setTimeout(add, 1000);
}