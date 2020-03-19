import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ScrabbleBoard from "./scrabble-board";

describe("ScrabbleBoard Component", () => {
  it("should render a table", () => {
    const { getByRole } = render(<ScrabbleBoard />);
    expect(getByRole("table")).toBeTruthy();
  });

  it.todo("should render an empty board");
  it.todo("should render a board with words on");
});
