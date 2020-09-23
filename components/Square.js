import React, { useState } from 'react';
import './style.css';

const Square = (props) => {
  const [clicked, setClick] = useState(false);

  //coordinates starts with 0-99 corresponding to the board array,
  //convert this to i , j format
  const getSquareCoordinates = () => {
    let coordinates = props.coordinates;
    let i;
    let j;
    //account for cases 0-9
    if (coordinates < 10) {
      i = 0;
      j = coordinates;
    } else {
      i = Math.floor(coordinates / 10);
      j = coordinates % 10;
    }

    return [i, j];
  };

  let coordinateArray = getSquareCoordinates();
  let i = coordinateArray[0];
  let j = coordinateArray[1];
  let hitStatus = props.currentPlayer.playerBoard.board[i][j];

  let boardSquare = props.boardSquare;
  let containerName = `squareContainer`;

  const squareStatus = () => {
    if (hitStatus === 'hit') {
      return 'hitShip';
    } else if (hitStatus === 'miss') {
      return 'clickedSquare';
    } else if (boardSquare === null) {
      return '';
    } else {
      return 'boardShip';
    }
  };

  const handleAttack = () => {
    if (!props.gameStarted || props.gameEnded) return;
    if (boardSquare === null) boardSquare = 'miss';

    if (props.name !== 'Computer' || clicked === true) return; // if you do not click player one's board return

    props.handleClick(i, j);
    setClick(true);
  };

  return (
    <div
      className={`${containerName} ${squareStatus()}`}
      onClick={handleAttack}
    >
      {props.coordinates}
      <div className="squareUnit"></div>
    </div>
  );
};

export default Square;
