import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ScrabbleBoard from "./components/scrabble-board";
import { ScrabbleBoard as ScrabbleBoardModel } from "./models/scrabble-board";

const scrabbleBoard = new ScrabbleBoardModel();
scrabbleBoard.play(5, 3, "across", "orange");
scrabbleBoard.play(7, 2, "down", "tan");

function App() {
  return (
    <div className="App">
      <ScrabbleBoard board={scrabbleBoard.toString()} />
    </div>
  );
}

export default App;
