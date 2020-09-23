const Gameboard = () => {
  const board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));

  let fleet = [];

  const placeShip = (ship, i, j) => {
    if (!validPlacement(ship, i, j)) return false;

    for (let k = 0; k < ship.getLength(); k++) {
      if (ship.isHorizontal) {
        //k is the body part of the ship, so [0][1][2]...[k]
        board[i][j + k] = { index: k, name: ship.name };
      } else {
        board[i + k][j] = { index: k, name: ship.name };
      }
    }

    fleet.push(ship);
    return true;
  };
  const receiveAttack = (i, j) => {
    if (board[i][j] !== null && board[i][j] !== 'miss') {
      let ship = fleet.find((ship) => ship.name === board[i][j].name);
      ship.markHit(board[i][j].index);
      board[i][j] = 'hit';
    } else {
      board[i][j] = 'miss';
    }
  };

  const fleetSunk = () => {
    return fleet.every((ship) => ship.isSunk());
  };
  const validPlacement = (ship, i, j) => {
    //check length of ship, so like you cant go over edges

    for (let k = 0; k < ship.getLength(); k++) {
      if (ship.isHorizontal) {
        if (k + j <= 9 && board[i][j + k] === null) {
          continue;
        } else {
          return false;
        }
      } else {
        if (k + i <= 9 && board[i + k][j] === null) {
          continue;
        } else {
          return false;
        }
      }
    }
    return true;
  };

  return { board, placeShip, receiveAttack, fleetSunk };
};

export default Gameboard;
