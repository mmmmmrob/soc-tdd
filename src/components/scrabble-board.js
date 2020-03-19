import React from "react";

export default class ScrabbleBoard extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.board.split("\n").map((row, y) => (
            <tr key={`row-${y}`}>
              {row.split("").map((cell, x) => {
                return <td key={`cell-${x}${y}`}>{cell}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
