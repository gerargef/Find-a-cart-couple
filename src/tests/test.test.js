import { describe, expect, test } from "@jest/globals";
import { createRandomNumberForCard, shuffle } from '../card-field';
describe("Card-field", () => {
  describe("createRandomNumberForCard()", () => {
    test("it should create number", () => {
      const number = createRandomNumberForCard();
      expect(typeof number).toBe('number');
    });
  });
}); 
