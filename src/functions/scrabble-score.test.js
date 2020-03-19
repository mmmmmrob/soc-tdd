import { scrabbleScore } from "./scrabble-score";

describe("Scrabble Score", () => {
  it("should score lowercase letters", () => {
    expect(scrabbleScore("a")).toEqual(1);
  });

  it("should score uppercase letters", () => {
    expect(scrabbleScore("A")).toEqual(1);
  });

  it("should score cabbage as 14 points", () => {
    expect(scrabbleScore("cabbage")).toEqual(14);
  });

  it("should score all letters correctly", () => {
    const letters = [..."abcdefghijklmnopqrstuvwxyz"];
    let expectedScores = [..."13321424185131130111144840"];
    expectedScores = expectedScores.map(i => (i === "0" ? 10 : parseInt(i)));
    const actualScores = letters.map(letter => scrabbleScore(letter));
    expect(actualScores).toEqual(expectedScores);
  });

  it("should score short words", () => {
    const words = ["a", "the", "it", "i"];
    const expectedScores = [1, 6, 2, 1];
    const actualScores = words.map(scrabbleScore);
    expect(actualScores).toEqual(expectedScores);
  });

  it("should score long words", () => {
    const words = ["wheezily", "jukebox", "quickly", "maximize"];
    const expectedScores = [26, 27, 25, 28];
    const actualScores = words.map(scrabbleScore);
    expect(actualScores).toEqual(expectedScores);
  });

  it("should throw if given numbers", () => {
    expect(() => scrabbleScore("l33t")).toThrow("Invalid characters given.");
  });

  it("should throw if given symbols", () => {
    expect(() => scrabbleScore("$chool")).toThrow("Invalid characters given.");
  });

  it("should throw if characters outside a to z", () => {
    expect(() => scrabbleScore("ǣ")).toThrow("Invalid characters given.");
  });
});
