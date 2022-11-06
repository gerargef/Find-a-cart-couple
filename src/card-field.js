class CardField {
  constructor(element, cardNumber) {
    if (!(element instanceof HTMLElement)) {
      throw new Error("Передан не HTML элемент");
    }
    console.log(cardNumber);
    this.element = element;
  }
}
