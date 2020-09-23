import Gameboard from '../factories/gameboard';
import Ship from '../factories/ship';

describe('Gameboard', () => {
  const newBoard = Gameboard();
  const ship = Ship('Destroyer', true);

  test('placed ship', () => {
    newBoard.placeShip(ship, 0, 1);
    expect(newBoard.board[0][1]).toEqual({ index: 0, name: 'Destroyer' });
  });
  test('receiveAttack', () => {
    newBoard.receiveAttack(0, 2);
    expect(ship.body[1]).toBe(true);
  });
  test('missed target', () => {
    newBoard.receiveAttack(0, 5);
    expect(newBoard.board[0][5]).toBe('miss');
  });
  test('fleet sunk', () => {
    newBoard.receiveAttack(0, 1);
    expect(newBoard.fleetSunk()).toBe(true);
  });
});
