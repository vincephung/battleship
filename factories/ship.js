const Ship = (shipName, isHorizontal) => {
  const shipTypes = {
    Destroyer: 2,
    Cruiser: 3,
    Battleship: 4,
    Carrier: 5,
  };

  const length = shipTypes[shipName];
  const name = shipName;

  const getLength = () => length;

  //store which part of ship has been hit;
  const body = Array(length).fill(false);

  //position is coordinates?
  const markHit = (position) => {
    //look for position in boardPosition array then mark that index in the body as hit.
    //example: ship is located at [[0,0] [0,1] [0,2]] , if [0,1] is hit, mark body[1] as hit
    body[position] = true;
    isSunk();
  };

  const isSunk = () => {
    //if whole body array is "hit" return true
    return body.every(Boolean);
  };

  return { name, body, isHorizontal, markHit, getLength, isSunk };
};

export default Ship;
