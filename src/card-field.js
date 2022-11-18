class CardField {
  constructor(element, cardNumber) {
    if (!(element instanceof HTMLElement)) {
      throw new Error("Передан не HTML элемент");
    }
    this.element = element;
    this.startGame(cardNumber);
    this.onCardClick = this.onCardClick.bind(this);
    this.element.addEventListener("click", this.onCardClick);
  }
  startGame(cardNumber) {
    this.createCardField(cardNumber);

    window.setTimeout(function renderCardBackField() {
      for (let index = 0; index < cardNumber; index++) {
        document
          .querySelector(".card-field__cards-back")
          .appendChild(
            templateEngine(CardField.card("src/img/Card_back.png", index))
          );
      }
    }, 5000);
  }
  onCardClick(event) {
    const target = event.target;
    console.log(target);
  }
  createCardField(cardNumber) {
    const newHalfRandomCardArray = [];
    requests({
      url: "./src/cards-img.json",
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
          this.element.appendChild(
            templateEngine(CardField.card(cardSrc, index))
          );
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
CardField.card = (cardSrc, cardNumber) => ({
  tag: "img",
  attrs: { src: cardSrc, id: cardSrc.slice(8, -4), "data-number": cardNumber },
  cls: "card-field__card",
});
