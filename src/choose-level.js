import { templateEngine } from "./lib/template-engine.js";
import { CardField } from "./card-field.js";
export class ChooseLevel {
  constructor(element) {
    if (!(element instanceof HTMLElement)) {
      throw new Error("Передан не HTML элемент");
    }
    window.application.gameStatus === "Choose level";
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
      window.application.level = target.dataset.level;
    }

    if (
      target.classList.contains("choose-level-page__start-button") &&
      window.application.level
    ) {
      this.element.classList.add("choose-level-page_hidden");
      new CardField(
        document.querySelector(".card-field"),
        window.application.level * 6
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
          attrs: { "data-level": "1" },
        },
        {
          tag: "button",
          cls: ["choose-level-page__button", "choose-level-page__button_2"],
          content: "2",
          attrs: { "data-level": "2" },
        },
        {
          tag: "button",
          cls: ["choose-level-page__button", "choose-level-page__button_3"],
          content: "3",
          attrs: { "data-level": "3" },
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
