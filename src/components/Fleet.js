import React, { useState, useEffect } from 'react';
import Ship from '../factories/ship';

const Fleet = (props) => {
  const [shipType, setShipType] = useState('Destroyer');
  const [coordinates, setCoordinates] = useState('');
  const [orientation, setOrientation] = useState('Horizontal');
  const [destroyer, disableDestroyer] = useState(false);
  const [cruiser, disableCruiser] = useState(false);
  const [battleship, disableBattleship] = useState(false);
  const [carrier, disableCarrier] = useState(false);
  const [submit, disableSubmit] = useState(false);

  useEffect(() => {
    //resets buttons when game resets
    if (props.gameStart) {
      disableDestroyer(false);
      disableCruiser(false);
      disableBattleship(false);
      disableCarrier(false);
      disableSubmit(false);
    }
  }, [props.gameStart]);

  const handleChange = (e) => {
    const { value, type } = e.target;

    if (type === 'radio') {
      disableSubmit(false);
      setShipType(e.target.name);
      setCoordinates('');
    } else if (type === 'text') {
      setCoordinates(value);
    }
  };
  const handleOrientation = (e) => {
    setOrientation(e.target.name);
  };

  const disableRadio = (shipType) => {
    disableSubmit(true);
    switch (shipType) {
      case 'Destroyer':
        disableDestroyer(true);
        break;
      case 'Cruiser':
        disableCruiser(true);
        break;
      case 'Battleship':
        disableBattleship(true);
        break;
      case 'Carrier':
        disableCarrier(true);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let i = parseInt(coordinates.charAt(0));
    let j = parseInt(coordinates.charAt(1));

    let isHorizontal = orientation === 'Horizontal' ? true : false;
    let newShip = Ship(shipType, isHorizontal);
    let placedShip = props.playerBoard.placeShip(newShip, i, j);
    setCoordinates('');

    if (!placedShip) {
      alert('Bad coordinates, try again!');
      return;
    }
    disableRadio(shipType);
    props.renderShips();
  };

  return (
    <div className="gameInfo">
      <div className="formContainer">
        <form>
          <h1>Customize your ships</h1>
          <label>
            <input
              type="radio"
              name="Destroyer"
              value="Destroyer"
              checked={shipType === 'Destroyer'}
              disabled={destroyer}
              onChange={handleChange}
            />{' '}
            Destroyer
          </label>
          <label>
            <input
              type="radio"
              name="Cruiser"
              value="Cruiser"
              checked={shipType === 'Cruiser'}
              disabled={cruiser}
              onChange={handleChange}
            />{' '}
            Cruiser
          </label>
          <label>
            <input
              type="radio"
              name="Battleship"
              value="Battleship"
              checked={shipType === 'Battleship'}
              disabled={battleship}
              onChange={handleChange}
            />{' '}
            Battleship
          </label>
          <label>
            <input
              type="radio"
              name="Carrier"
              value="Carrier"
              checked={shipType === 'Carrier'}
              disabled={carrier}
              onChange={handleChange}
            />{' '}
            Carrier
          </label>
          <input
            name="coordinates"
            type="text"
            value={coordinates}
            onChange={handleChange}
            placeholder="Enter Coordinates, example: (56)"
          />
          <label>
            <input
              type="radio"
              name="Horizontal"
              value="Horizontal"
              checked={orientation === 'Horizontal'}
              onChange={handleOrientation}
            />{' '}
            Horizontal
          </label>
          <label>
            <input
              type="radio"
              name="Vertical"
              value="Vertical"
              checked={orientation === 'Vertical'}
              onChange={handleOrientation}
            />{' '}
            Vertical
          </label>
          <button onClick={handleSubmit} disabled={submit}>
            Submit
          </button>
        </form>
      </div>
      <div className="gameKey">
        <h1 className="redSquare">Red square is missed</h1>
        <h1 className="blueSquare">Blue square is ship location</h1>
        <h1 className="greenSquare">Green square is hit</h1>
      </div>
    </div>
  );
};

export default Fleet;
