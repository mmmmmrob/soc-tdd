import { ScrabbleBoard } from "./scrabble-board";
import { testBoards } from "./test-boards";

describe("Scrabble Board", () => {
  it.skip("should return the board as a multiline string", () => {
    const board = new ScrabbleBoard();
    expect(board.toString()).toEqual(testBoards.empty);
  });

  it.skip("should store a word going left-to-right", () => {
    const board = new ScrabbleBoard();
    const boardString = board.play(3, 5, "across", "banana");
    expect(boardString).toEqual(testBoards.banana);
  });

  it.todo("should store a word going top-to-bottom");
  it.todo("should store a word that correctly overlaps existing words");
  it.todo("should throw for a word that incorrectly overlaps existing words");
});
