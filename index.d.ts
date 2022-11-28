export {};

interface apllication  {
    chosenLevel?: number,
    gameLevels: object,
    chosenCards: Array<string>,
    chosenCardsQuantity: number,
    points: number,
    gameStatus?: string,
    timer: number
}

declare global {
    interface Window {
        application: apllication;
    }
  }