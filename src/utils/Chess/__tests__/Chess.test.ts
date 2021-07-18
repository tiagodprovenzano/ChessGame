import Board from '../Board';
import Chess from '../';

jest.mock('../Board', () =>
  jest.fn().mockImplementation(() => ({
    userTileColor: 'white',
  })),
);

describe('check if child classes are called', () => {
  it('is board class constructor called', () => {
    const chess = new Chess();
    expect(Board).toHaveBeenCalled();
  });
  it('return the color of user tile', () => {
    const chess = new Chess();
    expect(chess.getUserTileColor()).toBe('white');
  });
});
