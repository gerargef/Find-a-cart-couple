class ChooseLevel {
  constructor(element) {
    if (!(element instanceof HTMLElement)) {
      throw new Error("Передан не HTML элемент");
    }

    this.element = element;
    this.chooseLevelFunctionToGenerateCardField =
      this.chooseLevelFunctionToGenerateCardField.bind(this);

    this.renderChooseLevelField();

    this.element.addEventListener(
      "click",
      this.chooseLevelFunctionToGenerateCardField
    );
  }

  renderChooseLevelField() {
    this.element.appendChild(templateEngine(ChooseLevel.chooseLevelTemplate));
  }

  chooseLevelFunctionToGenerateCardField(event) {
    event.preventDefault();
    const target = event.target;

    if (target.classList.contains("choose-level-page__button")) {
      window.application.level = target.dataset.cardsNumber;
    }

    if (
      target.classList.contains("choose-level-page__start-button") &&
      window.application.level
    ) {
      console.log(this.element);
      this.element.classList.add("choose-level-page_hidden");
      new CardField(
        document.querySelector(".card-field"),
        window.application.level
      );
    }
  }
}
ChooseLevel.chooseLevelTemplate = {
  tag: "div",
  cls: "choose-level-page__field",
  content: [
    {
      tag: "p",
      cls: "choose-level-page__title",
      content: "Выбери сложность",
    },
    {
      tag: "div",
      cls: "choose-level-page__buttons",
      content: [
        {
          tag: "button",
          cls: ["choose-level-page__button", "choose-level-page__button_1"],
          content: "1",
          attrs: { "data-cards-number": "6" },
        },
        {
          tag: "button",
          cls: ["choose-level-page__button", "choose-level-page__button_2"],
          content: "2",
          attrs: { "data-cards-number": "12" },
        },
        {
          tag: "button",
          cls: ["choose-level-page__button", "choose-level-page__button_3"],
          content: "3",
          attrs: { "data-cards-number": "18" },
        },
      ],
    },
    {
      tag: "button",
      cls: ["choose-level-page__start-button"],
      content: "Старт",
    },
  ],
};
