import { templateEngine } from "./lib/template-engine.js";
import { stopTimer } from './timer'
import { generateChooseLevelField } from "./choose-level";

const cardField = document.querySelector(".card-field") as Element;
const modalGameResult = cardField.querySelector('.modal-game-result') as Element;


export const gameResultFunction = (isWin: boolean) => {
  const gameResultObject: object = {
    src: isWin ? "./static/img/isWin.png" : "./static/img/isLose.png",
    message: isWin ? "Вы выиграли!" : "Вы проиграли!",
    timer:  stopTimer(),
  };
  if (modalGameResult.classList.contains('modal-game-result_hidden')) {
    modalGameResult.classList.remove('modal-game-result_hidden')
  }
 
  modalGameResult.appendChild(templateEngine(gameResultTemplate(gameResultObject)));
  againButtonHandler();
};

const againButtonHandler = () => {
  const cardFieldAgainButton = modalGameResult.querySelector('.card-field__again-button') as Element;
  cardFieldAgainButton.addEventListener('click', (event: Event) => {
    const cardBacks = document
    .querySelector(".card-field__cards-back") as Element; 
    cardBacks.innerHTML = '';
    const cardFieldCards = cardField
      .querySelector(".card-field__cards") as Element;
      cardFieldCards.innerHTML = '';
      window.application.chosenLevel = undefined;
      window.application.chosenCards = [];
      window.application.chosenCardsQuantity = 0;
      window.application.points = 0;
      modalGameResult.classList.add('modal-game-result_hidden');
      modalGameResult.innerHTML = '';
      const displayArea = cardField.querySelector('.card-field__display-area') as Element;
      displayArea.classList.add('card-field__display-area_hidden');
      generateChooseLevelField();
  })
}

const gameResultTemplate = (gameResultObject: object) => ({
    tag: "div",
    cls: "modal-game-result__content",
    content: [
      { tag: "img", attrs: { src: gameResultObject["src" as keyof object] } },
      {
        tag: "p",
        content: gameResultObject["message" as keyof object],
        cls: "modal-game-result__message",
      },
      {
        tag: "p",
        content: "Затраченное время:",
        cls: "modal-game-result__game-time-message",
      },
      {
        tag: "p",
        content: gameResultObject["timer" as keyof object],
        cls: "modal-game-result__game-time",
      },
      {
        tag: "button",
        content: "Начать заново",
        cls: "card-field__again-button",
      },
    ]
  });
