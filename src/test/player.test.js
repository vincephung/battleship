import Ship from '../factories/ship';
import Player from '../factories/player';

describe('Player', () => {
  const player = Player('Player');
  const enemy = Player('Enemy');

  player.enemy = enemy;
  enemy.enemy = player;

  enemy.playerBoard.placeShip(Ship('Carrier', false), 2, 5);

  test('random place fleet', () => {
    expect(player.autoPlaceFleet()).toBe(true);
  });

  test('player turn worked', () => {
    player.turn(enemy, 1, 5);
    expect(enemy.playerBoard.board[1][5]).toBe('miss');
  });
  test('auto turn worked', () => {
    expect(enemy.randomAttack(player)).toBe(false);
  });
});
