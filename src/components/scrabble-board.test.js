import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ScrabbleBoard from "./scrabble-board";

describe("ScrabbleBoard Component", () => {
  it("should render as a table", () => {
    const { getByRole } = render(<ScrabbleBoard />);
    expect(getByRole("table")).toBeTruthy();
  });

  it.todo("should render 15 rows");
  it.todo("should render 15 cells within each row");
  it.todo("should render an empty board");
  it.todo("should render a board with a word going across");
  it.todo("should render a board with a word going down");
  it.todo("should render a board with several words going across and down");
});
