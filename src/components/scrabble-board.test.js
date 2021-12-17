import React from "react";
import { render, getNodeText, getAllByRole } from "@testing-library/react";
import ScrabbleBoard from "./scrabble-board";
import { testBoards } from "./test-boards";

describe("ScrabbleBoard Component", () => {
  it("should render as a table", () => {
    const { getByRole } = render(<ScrabbleBoard board={testBoards.empty} />);
    expect(getByRole("table")).toBeTruthy();
  });

  it("should render 15 rows", () => {
    const { getAllByRole } = render(<ScrabbleBoard board={testBoards.empty} />);
    expect(getAllByRole("row").length).toBe(15);
  });

  it("should render 15 cells within each row", () => {
    const { getAllByRole } = render(<ScrabbleBoard board={testBoards.empty} />);
    //TODO this test should test the structure not just the overall count
    expect(getAllByRole("cell").length).toBe(225);
  });

  it("should render an empty board", () => {
    const { getAllByRole } = render(<ScrabbleBoard board={testBoards.empty} />);
    const isEveryCellEmpty = getAllByRole("cell").every(
      (el) => getNodeText(el) === ""
    );
    expect(isEveryCellEmpty).toBeTruthy();
  });

  it("should render a board with a word going across", () => {
    const { container } = render(<ScrabbleBoard board={testBoards.banana} />);
    const row = getAllByRole(container, "row")[5];
    const cells = getAllByRole(row, "cell").slice(3, 9);
    const actualText = cells.map((el) => getNodeText(el)).join("");
    expect(actualText).toEqual("banana");
  });

  it("should render a board with a word going down", () => {
    const { container } = render(<ScrabbleBoard board={testBoards.apple} />);
    const rows = getAllByRole(container, "row").slice(5, 10);
    const cells = rows.map((row) => getAllByRole(row, "cell")[3]);
    const actualText = cells.map((el) => getNodeText(el)).join("");
    expect(actualText).toEqual("apple");
  });

  it.todo("should render a board with several words going across and down");
});
