import { requests } from "./lib/request.js";
import { templateEngine } from "./lib/template-engine.js";
export class CardField {
  constructor(element, cardNumber) {
    console.log(cardNumber);
    if (!(element instanceof HTMLElement)) {
      throw new Error("Передан не HTML элемент");
    }
    this.element = element;
    this.element.classList.remove("card-field_hidden");
    this.startGame(cardNumber);
  }
  startGame(cardNumber) {
    this.createCardField(cardNumber);

    window.setTimeout(function renderCardBackField() {
      for (let index = 0; index < cardNumber; index++) {
        document
          .querySelector(".card-field__cards-back")
          .appendChild(
            templateEngine(CardField.card("static/img/Card_back.png", true))
          );
      }
      const renderedCardsArray = document.querySelectorAll(".card-field__card");
      renderedCardsArray.forEach((card) => {
        card.classList.add("card-field__card_hidden");
      });
      CardField.findACardCoupleFunction();
    }, 5000);
  }
  createCardField(cardNumber) {
    const newHalfRandomCardArray = [];
    requests({
      url: "./static/cards-img.json",
      onSuccess: (data) => {
        const srcArrayCardImg = Object.values(data);
        for (let index = 0; index < cardNumber / 2; index++) {
          newHalfRandomCardArray.push(
            srcArrayCardImg[this.createRandomNumberForCard()]
          );
        }
        const newRandomCardArray = newHalfRandomCardArray.concat(
          newHalfRandomCardArray
        );
        this.shuffle(newRandomCardArray);
        for (let index = 0; index < newRandomCardArray.length; index++) {
          const cardSrc = newRandomCardArray[index];
          console.log(this.element);
          this.element
            .querySelector(".card-field__cards")
            .appendChild(templateEngine(CardField.card(cardSrc, false)));
        }
      },
    });
  }
  createRandomNumberForCard() {
    let randomNumber;
    randomNumber = Math.round(Math.random() * 35);
    return randomNumber;
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
CardField.card = (cardSrc, isCardBack) => ({
  tag: "img",
  attrs: { src: cardSrc, id: cardSrc.slice(12, -4) },
  cls: [isCardBack ? "card-field__card-back" : "card-field__card"],
});
CardField.findACardCoupleFunction = () => {
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

      if (
        window.application.chosenCards[0] === window.application.chosenCards[1]
      ) {
        window.application.points = window.application.points + 1;
        window.application.chosenCards = [];
      }

      if (
        window.application.chosenCardsQuantity ===
        window.application.level * 6
      ) {
        window.gameStatus === "Result", window.application.gameResultFunction();
      }
    });
};
