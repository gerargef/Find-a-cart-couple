import { templateEngine } from "./lib/template-engine.js";
import { generateCardFieldFunction } from "./card-field";
const chooseLevelPage = document.querySelector(".choose-level-page");
const chooseLevelPageElement: Element = chooseLevelPage!;

export function generateChooseLevelField() {
  if (chooseLevelPageElement.classList.contains("choose-level-page_hidden")) {
    chooseLevelPageElement.classList.remove("choose-level-page_hidden");
  }
  window.application.gameStatus === "Choose level";
  renderChooseLevelField(chooseLevelPageElement);
  chooseLevelPageElement.addEventListener(
    "click",
    chooseLevelFunctionToGenerateCardField
  );
}

const renderChooseLevelField = (div: Element) => {
  if (div.querySelector('.choose-level-page__field')) {
    return
  }
  div.appendChild(templateEngine(chooseLevelTemplate));
};

const chooseLevelFunctionToGenerateCardField = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLElement;

  if (target.classList.contains("choose-level-page__button")) {
    window.application.chosenLevel = Number(target.dataset.level);
  }

  if (
    target.classList.contains("choose-level-page__start-button") &&
    window.application.chosenLevel
  ) {
    chooseLevelPageElement.classList.add("choose-level-page_hidden");
    generateCardFieldFunction(
      window.application.gameLevels[
        window.application.chosenLevel as keyof object
      ]
    );
  }
};

const chooseLevelTemplate = {
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
