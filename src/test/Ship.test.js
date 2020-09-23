import Ship from '../factories/ship';

describe('Ship', () => {
  const ship = Ship('Destroyer', true);
  test('Ship values are initialized as false', () => {
    expect(ship.body.some((val) => val)).toBe(false);
  });

  test('Ship length is', () => {
    expect(ship.getLength()).toBe(2);
  });

  test('Mark hit worked', () => {
    ship.markHit(1);
    expect(ship.body[1]).toBe(true);
  });

  test('Ship sunk', () => {
    const newShip = Ship('Carrier', true);
    for (let i = 0; i < newShip.getLength(); i++) {
      newShip.markHit(i);
    }
    expect(newShip.isSunk()).toBe(true);
  });
});
