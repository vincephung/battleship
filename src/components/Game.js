import React, { useState } from 'react';
import Player from '../factories/player';
import Board from './Board';
import Fleet from './Fleet';

const Game = () => {
  const [gameStart, setGameStart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [winner, setGameWinner] = useState('');
  const [playerOne, setPlayer] = useState(Player('Player'));
  const [computer, setComputer] = useState(Player('Computer'));
  const [turn, setTurn] = useState(playerOne);
  const [fleet, updateFleet] = useState(0);

  playerOne.enemy = computer;
  computer.enemy = playerOne;

  //everytime ship is manually input, rerender dom
  const renderShips = () => {
    updateFleet((prevCount) => prevCount + 1);
  };
  const startGame = () => {
    //if start game is clicked again, reset
    if (gameStart) {
      resetGame();
      return;
    }

    if (fleet !== 4) {
      alert('Add all 4 ships first to start the game');
      return;
    } //user needs to input 4 ships to start

    setGameStart(true);
    computer.autoPlaceFleet();
    setGameEnd(false);
  };

  const resetGame = () => {
    setPlayer(Player(Player.name));
    setComputer(Player(computer.name));
    setGameEnd(false);
    setGameStart(false);
    setGameWinner('');
    updateFleet(0);
  };

  const handleClick = (i, j) => {
    if (gameEnd) return false;

    const playerWins = playerOne.turn(playerOne.enemy, i, j);
    const computerWins = computer.randomAttack(computer.enemy);

    turn === playerOne ? setTurn(computer) : setTurn(playerOne); // this is just to update state every turn

    if (playerWins || computerWins) {
      setGameEnd(playerWins || computerWins);
      setGameWinner(playerWins ? playerOne.name : computer.name);
    }
  };

  return (
    <div className="mainGame">
      <div className="gameContainer">
        <Fleet
          playerBoard={playerOne.playerBoard}
          renderShips={renderShips}
          gameStart={gameStart}
        />
        <Board
          name="PlayerOne"
          board={playerOne.playerBoard.board.flat()}
          currentPlayer={playerOne}
          handleClick={handleClick}
          gameEnded={gameEnd}
          gameStarted={gameStart}
        />
        <Board
          name="Computer"
          board={computer.playerBoard.board.flat()}
          currentPlayer={computer}
          handleClick={handleClick}
          gameStarted={gameStart}
          gameEnded={gameEnd}
        />
      </div>
      <div className="displayContainer">
        <button className="startBtn" onClick={startGame}>
          {gameStart ? 'Restart Game' : 'Start Game'}
        </button>
        <div>{gameEnd ? `The winner is ${winner}` : ''}</div>
      </div>
    </div>
  );
};

export default Game;
