import { templateEngine } from "./lib/template-engine.js";
const cardField = document.querySelector(".card-field") as Element;
// const cardFieldAgainButton = cardField.querySelector(
//   ".card-field__again-button"
// ) as Element;
// const displayArea = cardField.querySelector(
//   ".card-field__display-area"
// ) as Element;
const cardFieldElement: Element = cardField!;
import { cardsSrc } from "./card-src";
import { gameResultFunction } from "./game-result";
import { startTimer } from "./timer";
import { stopTimer } from "./timer";

export function generateCardFieldFunction(cardsQuantity: number) {
  stopTimer();
  const cardField = document.querySelector(".card-field") as Element;
  const cardFieldAgainButton = cardField.querySelector(
    ".card-field__again-button"
  ) as Element;
  cardFieldAgainButton.removeEventListener("click", againButtonHandler);
  cardField.classList.remove("card-field_hidden");
  const displayArea = cardField.querySelector(
    ".card-field__display-area"
  ) as Element;
  displayArea.classList.remove("card-field__display-area_hidden");
  createCardField(cardsQuantity);
  window.setTimeout(starGame, 5000);
}

const starGame = () => {
  hideCards();
  createCardBack(
    window.application.gameLevels[
      window.application.chosenLevel as keyof object
    ]
  );
  findACardCoupleFunction();
  window.application.timer = Date.now();
  startTimer();
  againButton();
};

const againButton = () => {
  const cardField = document.querySelector(".card-field") as Element;
const cardFieldAgainButton = cardField.querySelector(
  ".card-field__again-button"
) as Element;
  cardFieldAgainButton.addEventListener("click", againButtonHandler);
};

const againButtonHandler = () => {
  const cardBacks = document.querySelector(
    ".card-field__cards-back"
  ) as Element;
  cardBacks.innerHTML = "";
  const cardField = document.querySelector(".card-field") as Element;
  const cardFieldCards = cardField.querySelector(
    ".card-field__cards"
  ) as Element;
  cardFieldCards.innerHTML = "";
  window.application.chosenCards = [];
  window.application.chosenCardsQuantity = 0;
  window.application.points = 0;
  cardFieldCards.removeEventListener("click", findACardCoupleHandler);
  generateCardFieldFunction(
    window.application.gameLevels[
      window.application.chosenLevel as keyof object
    ]
  );
};

const createCardBack = (cardsQuantity: number) => {
  for (let index = 0; index < cardsQuantity; index++) {
    console.log("back" + index);
    const cardBacks = document.querySelector(
      ".card-field__cards-back"
    ) as Element;
    cardBacks.appendChild(
      templateEngine(cardsTemplateFunction("static/img/Card_back.png", true))
    );
  }
};

export const createCardField = (cardsQuantity: number) => {
  const newHalfRandomCardArray = [];
  for (let index = 0; index < cardsQuantity / 2; index++) {
    newHalfRandomCardArray.push(cardsSrc[createRandomNumberForCard()]);
  }
  const newRandomCardArray = newHalfRandomCardArray.concat(
    newHalfRandomCardArray
  );
  shuffle(newRandomCardArray);
  for (let index = 0; index < newRandomCardArray.length; index++) {
    const cardSrc = newRandomCardArray[index];
    const cardField = document.querySelector(".card-field") as Element;
    const cardFieldElement: Element = cardField!;
    const cardFieldCards = cardFieldElement.querySelector(
      ".card-field__cards"
    ) as Element;
    cardFieldCards.appendChild(
      templateEngine(cardsTemplateFunction(cardSrc, false))
    );
  }
  return newRandomCardArray;
};

export const createRandomNumberForCard = () => {
  let randomNumber;
  randomNumber = Math.round(Math.random() * 35);
  return randomNumber;
};

export const shuffle = (array: Array<string>) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const hideCards = () => {
  const renderedCardsArray = document.querySelectorAll(".card-field__card");
  renderedCardsArray.forEach((card) => {
    card.classList.add("card-field__card_hidden");
  });
};

const cardsTemplateFunction = (cardSrc: string, isCardBack: boolean) => ({
  tag: "img",
  attrs: { src: cardSrc, id: cardSrc.slice(12, -4) },
  cls: [isCardBack ? "card-field__card-back" : "card-field__card"],
});

const findACardCoupleFunction = () => {
  window.application.gameStatus === "Game";
  const cardField = document.querySelector(".card-field") as Element;
  const cardFieldCards = cardField.querySelector(
    ".card-field__cards"
  ) as Element;
  cardFieldCards.addEventListener("click", findACardCoupleHandler);
};
const findACardCoupleHandler = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!target.classList.contains("card-field__card")) {
    return;
  }
  window.application.chosenCardsQuantity =
    window.application.chosenCardsQuantity + 1;
  console.log(window.application.chosenCardsQuantity);
  window.application.chosenCards.push(target.id);
  target.classList.remove("card-field__card_hidden");
  target.classList.add("card-field__card_in-couple");
  if (window.application.chosenCards[1] === undefined) {
    return;
  }
  if (window.application.chosenCards[0] === window.application.chosenCards[1]) {
    window.application.points = window.application.points + 1;
    console.log(window.application.chosenCards);
    console.log(window.application.points);
    window.application.chosenCards = [];
  } else {
    window.application.gameStatus === "Result", gameResultFunction(false);
  }
  if (
    window.application.chosenCardsQuantity ===
    window.application.gameLevels[
      window.application.chosenLevel as keyof object
    ]
  ) {
    window.application.gameStatus === "Result", gameResultFunction(true);
  }
};
