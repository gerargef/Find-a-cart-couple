import { templateEngine } from "./lib/template-engine.js";
const cardField = document.querySelector(".card-field");
import { cardsSrc } from "./card-src.js";

export function generateCardFieldFunction(cardsQuantity) {
  cardField.classList.remove("card-field_hidden");
  createCardField(cardsQuantity);
  window.setTimeout(starGame, 5000);
}

const starGame = () => {
  hideCards();
  createCardBack(window.application.gameLevels[window.application.chosenLevel]);
  findACardCoupleFunction();
};

const createCardBack = (cardsQuantity) => {
  for (let index = 0; index < cardsQuantity; index++) {
    document
      .querySelector(".card-field__cards-back")
      .appendChild(
        templateEngine(cardsTemplateFunction("static/img/Card_back.png", true))
      );
  }
};

const createCardField = (cardsQuantity) => {
  const newHalfRandomCardArray = [];
  for (let index = 0; index < cardsQuantity / 2; index++) {
    console.log(cardsQuantity);
    newHalfRandomCardArray.push(cardsSrc[createRandomNumberForCard()]);
  }
  const newRandomCardArray = newHalfRandomCardArray.concat(
    newHalfRandomCardArray
  );
  shuffle(newRandomCardArray);
  for (let index = 0; index < newRandomCardArray.length; index++) {
    const cardSrc = newRandomCardArray[index];
    cardField
      .querySelector(".card-field__cards")
      .appendChild(templateEngine(cardsTemplateFunction(cardSrc, false)));
  }
};

const createRandomNumberForCard = () => {
  let randomNumber;
  randomNumber = Math.round(Math.random() * 35);
  return randomNumber;
};

const shuffle = (array) => {
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

const cardsTemplateFunction = (cardSrc, isCardBack) => ({
  tag: "img",
  attrs: { src: cardSrc, id: cardSrc.slice(12, -4) },
  cls: [isCardBack ? "card-field__card-back" : "card-field__card"],
});

const findACardCoupleFunction = () => {
  window.application.gameStatus === "Game";
  document
    .querySelector(".card-field__cards")
    .addEventListener("click", (event) => {
      const target = event.target;
      console.log(target);
      if (!target.classList.contains("card-field__card")) {
        return;
      }
      window.application.chosenCardsQuantity =
        window.application.chosenCardsQuantity + 1;
      window.application.chosenCards.push(target.id);
      target.classList.remove("card-field__card_hidden");
      target.classList.add("card-field__card_in-couple");
      if (window.application.chosenCards[1] === undefined) {
        return;
      }
      if (
        window.application.chosenCards[0] === window.application.chosenCards[1]
      ) {
        window.application.points = window.application.points + 1;
        console.log(window.application.points);
        window.application.chosenCards = [];
      } else {
        window.gameStatus === "Result", window.application.gameResultFunction();
      }
      if (
        window.application.chosenCardsQuantity ===
        window.application.gameLevels[window.application.chosenLevel]
      ) {
        window.gameStatus === "Result", window.application.gameResultFunction();
      }
    });
};
