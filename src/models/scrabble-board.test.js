import { ScrabbleBoard } from "./scrabble-board";
import { testBoards } from "./test-boards";

describe("Scrabble Board", () => {
  it("should return the board as a multiline string", () => {
    const board = new ScrabbleBoard();
    expect(board.toString()).toEqual(testBoards.empty);
  });

  it("should store a word going left-to-right", () => {
    const board = new ScrabbleBoard();
    const boardString = board.play(3, 5, "across", "banana");
    expect(boardString).toEqual(testBoards.banana);
  });

  it("should store a word going top-to-bottom", () => {
    const board = new ScrabbleBoard();
    const boardString = board.play(3, 5, "down", "apple");
    expect(boardString).toEqual(testBoards.apple);
  });

  it("should store a word that correctly overlaps existing words", () => {
    const board = new ScrabbleBoard();
    board.play(5, 3, "across", "orange");
    board.play(7, 2, "down", "tan");
    expect(board.toString()).toEqual(testBoards.orange_tan);
  });

  it("should throw for a word that incorrectly overlaps existing words", () => {
    const board = new ScrabbleBoard();
    board.play(5, 3, "across", "orange");
    expect(() => board.play(7, 2, "down", "ton")).toThrow();
  });
});
