export class ScrabbleBoard {
  constructor() {
    this._board = [...Array(15)].map(() => {
      return Array(15).fill("-");
    });
  }

  play(x, y, dir, word) {
    word = [...word];
    word.forEach(letter => {
      if (this._board[y][x] !== "-" && this._board[y][x] !== letter)
        throw new Error("Letters clash with existing words");
      this._board[y][x] = letter;
      if (dir === "across") x++;
      else y++;
    });
    return this.toString();
  }

  toString() {
    return this._board.map(row => row.join("")).join("\n");
  }
}
