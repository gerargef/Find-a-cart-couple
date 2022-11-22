window.application = {
  chosenLevel: Number,
  gameLevels: { 1: 6, 2: 12, 3: 18 },
  chosenCards: [],
  chosenCardsQuantity: 0,
  points: 0,
  gameStatus: String,
  gameResultFunction: function () {
    window.application.points ===
    window.application.gameLevels[window.application.chosenLevel] / 2
      ? alert("Вы выиграли")
      : alert("Вы проиграли");
  },
};
