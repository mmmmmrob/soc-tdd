import { scrabbleScore } from "./scrabble-score";

describe("Scrabble Score", () => {
  it("should score lowercase letters", () => {
    expect(scrabbleScore("a")).toEqual(1);
  });

  it("should score uppercase letters", () => {
    expect(scrabbleScore("A")).toEqual(1);
  });

  it.skip("should score cabbage as 14 points", () => {
    expect(scrabbleScore("cabbage")).toEqual(14);
  });

  it.todo("should score all letters correctly");
  it.todo("should score short words");
  it.todo("should score long words");

  it.skip("should throw if given numbers", () => {
    expect(scrabbleScore("l33t")).toThrowError("Invalid characters given.");
  });
  it.todo("should throw if given symbols");
  it.todo("should throw if characters outside a to z");
});
