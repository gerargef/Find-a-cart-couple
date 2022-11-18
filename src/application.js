window.application = {
  level: Number,
  chosenCards: [],
  chosenCardsQuantity: 0,
  points: 0,
  gameStatus: String,
  gameResultFunction: function () {
    window.application.points === window.application.level * 3
      ? alert("Вы выиграли")
      : alert("Вы проиграли");
  },
};
