import {colorSelector} from '../colorSelector';

describe('testing color selector', () => {
  it('should return black', () => {
    const blackTiles = [
      1, 3, 5, 7, 8, 10, 12, 14, 17, 19, 21, 23, 24, 26, 28, 30, 33, 35, 37, 39,
      40, 42, 44, 46, 49, 51, 53, 55, 56, 58, 60, 62,
    ];

    blackTiles.forEach(index => {
      expect(colorSelector(index)).toBe('#769656');
    });
  });
  it('should return white', () => {
    const whiteTiles = [
      0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22, 25, 27, 29, 31, 32, 34, 36, 38,
      41, 43, 45, 47, 48, 50, 52, 54, 57, 59, 61, 63,
    ];

    whiteTiles.forEach(index => {
      expect(colorSelector(index)).toBe('#eeeed2');
    });
  });
});
