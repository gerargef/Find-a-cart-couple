class ChooseLevel {
    constructor (element) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTML элемент')
        }

        this.element = element;

        this.renderChooseLevelField();
    }

    renderChooseLevelField() {
        this.element.appendChild(templateEngine(ChooseLevel.chooseLevelTemplate));
    }

}
ChooseLevel.chooseLevelTemplate = {
    tag: "div",
    cls: "choose-level-page__field",
    content: [{
        tag: 'p',
        cls: "choose-level-page__title",
        content: "Выбери сложность"
    }, {
        tag: 'div',
        cls: "choose-level-page__buttons",
        content: [{
            tag: "button",
            cls: ["choose-level-page__button", "choose-level-page__button_1"],
            content: "1",
            attrs: {"data-level" : "1"},
        },{
            tag: "button",
            cls: ["choose-level-page__button", "choose-level-page__button_2"],
            content: "2",
            attrs: {"data-level" : "2"},
        },{
            tag: "button",
            cls: ["choose-level-page__button", "choose-level-page__button_3"],
            content: "3",
            attrs: {"data-level" : "4"},
        }]
    }, {
        tag: 'button',
        cls: ['choose-level-page__start-button'],
        content: "Старт"
    }]
}