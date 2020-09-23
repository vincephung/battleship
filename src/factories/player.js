import Gameboard from '../factories/gameboard';
import Ship from '../factories/ship';

const Player = (name) => {
  const playerBoard = Gameboard();
  let attackTracker = [];

  const turn = (enemy, i, j) => {
    let previousAttacks = parseInt(i.toString() + j.toString()); // converts attack to coordinates
    //checks if user already "attacked" a certain spot
    if (attackTracker.includes(previousAttacks)) return;

    enemy.playerBoard.receiveAttack(i, j);
    attackTracker.push(previousAttacks);

    return enemy.playerBoard.fleetSunk();
  };

  const autoPlaceFleet = () => {
    let fleet = ['Destroyer', 'Cruiser', 'Battleship', 'Carrier'];

    for (let ship of fleet) {
      autoPlaceShip(ship);
    }

    return true;
  };

  const autoPlaceShip = (shipName) => {
    let i = randomCoordinates();
    let j = randomCoordinates();
    let orientation = randomOrientation();
    let newShip = Ship(shipName, orientation);
    let validPlacement = playerBoard.placeShip(newShip, i, j);

    if (!validPlacement) autoPlaceShip(shipName);
  };

  const randomAttack = (enemy) => {
    let i = randomCoordinates();
    let j = randomCoordinates();
    return turn(enemy, i, j);
  };

  //random help methods
  const randomOrientation = () => (Math.random() < 0.5 ? true : false);
  const randomCoordinates = () => Math.floor(Math.random() * 10);

  return { name, playerBoard, turn, autoPlaceFleet, randomAttack };
};

export default Player;
