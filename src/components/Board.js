import React from 'react';
import Square from './Square';

const Board = (props) => {
  const boardSquares = props.board.map((square, coordinates) => (
    <Square
      name={props.name}
      key={coordinates}
      coordinates={coordinates}
      currentPlayer={props.currentPlayer}
      boardSquare={square}
      handleClick={props.handleClick}
      gameEnded={props.gameEnded}
      gameStarted={props.gameStarted}
    />
  ));

  return (
    <div className="boardContainer">
      <h1 className="playerName">{props.name}</h1>
      <div className="playerBoard">{boardSquares}</div>
    </div>
  );
};

export default Board;
