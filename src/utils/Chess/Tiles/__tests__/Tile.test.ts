import Tile from '..';
import {ITileType} from '../types/ITileType';

describe('Testing Tile Class', () => {
  it('Tile should have a type', () => {
    const tile = new Tile('Q');
    expect(tile.getType()).not.toBeUndefined();
  });
  it('Tile type should be a valid type', () => {
    const validTypes: ITileType[] = Tile.validTypes;
    const tile = new Tile('kL');
    expect(tile.getType()).not.toBeUndefined();
    expect(validTypes.includes(tile.getType())).toBe(true);
  });
  it('If invalid type is sent, throw an Error', () => {
    // @ts-ignore
    expect(() => new Tile('q')).toThrowError('Invalid tile type');
    // @ts-ignore
    expect(() => new Tile(true)).toThrowError('Invalid tile type');
  });
  it('Tile contructor receives if tile is from user or AI', () => {
    expect(new Tile('rLp').getIsUserTile()).toBe(true);
    expect(new Tile('Qp', false).getIsUserTile()).toBe(false);
  });
  it('If invalid useTile is sent, throw an Error', () => {
    // @ts-ignore
    expect(() => new Tile('rLp', 'true')).toThrowError(
      'UserTile should be a boolean',
    );
    // @ts-ignore
    expect(() => new Tile('rLp', 'boolean')).toThrowError(
      'UserTile should be a boolean',
    );
  });
  describe('Has proper position set', () => {
    describe('if initial position', () => {
      // Testing Queen position
      it('Q user', () => {
        expect(new Tile('Q').getPosition()).toBe('D1');
      });
      it('Q AI', () => {
        expect(new Tile('Q', false).getPosition()).toBe('D8');
      });

      // Testing King position
      it('K user', () => {
        expect(new Tile('K').getPosition()).toBe('E1');
      });
      it('K AI', () => {
        expect(new Tile('K', false).getPosition()).toBe('E8');
      });

      // Testing rook ligth pawn position
      it('rLp user', () => {
        expect(new Tile('rLp').getPosition()).toBe('H2');
      });
      it('rLp AI', () => {
        expect(new Tile('rLp', false).getPosition()).toBe('A7');
      });

      // Testing rook dark pawn position
      it('rDp user', () => {
        expect(new Tile('rDp').getPosition()).toBe('A2');
      });
      it('rDp AI', () => {
        expect(new Tile('rDp', false).getPosition()).toBe('H7');
      });
      
      // Testing bishop ligth pawn position
      it('bLp user', () => {
        expect(new Tile('bLp').getPosition()).toBe('F2');
      });
      it('bLp AI', () => {
        expect(new Tile('bLp', false).getPosition()).toBe('C7');
      });

      // Testing bishop dark pawn position
      it('bDp user', () => {
        expect(new Tile('bDp').getPosition()).toBe('C2');
      });
      it('bDp AI', () => {
        expect(new Tile('bDp', false).getPosition()).toBe('F7');
      });
      
      // Testing knight ligth pawn position
      it('kLp user', () => {
        expect(new Tile('kLp').getPosition()).toBe('B2');
      });
      it('kLp AI', () => {
        expect(new Tile('kLp', false).getPosition()).toBe('G7');
      });
      
      // Testing knight dark pawn position
      it('kDp user', () => {
        expect(new Tile('kDp').getPosition()).toBe('G2');
      });
      it('kDp AI', () => {
        expect(new Tile('kDp', false).getPosition()).toBe('B7');
      });

      // Testing queen pawn position
      it('Qp user', () => {
        expect(new Tile('Qp').getPosition()).toBe('D2');
      });
      it('Qp AI', () => {
        expect(new Tile('Qp', false).getPosition()).toBe('D7');
      });

      // Testing Kings pawn position
      it('Kp user', () => {
        expect(new Tile('Kp').getPosition()).toBe('E2');
      });
      it('Kp AI', () => {
        expect(new Tile('Kp', false).getPosition()).toBe('E7');
      });

      // Testing rook light position
      it('rL user', () => {
        expect(new Tile('rL').getPosition()).toBe('H1');
      });
      it('rL AI', () => {
        expect(new Tile('rL', false).getPosition()).toBe('A8');
      });

      // Testing rook dark position
      it('rD user', () => {
        expect(new Tile('rD').getPosition()).toBe('A1');
      });
      it('rD AI', () => {
        expect(new Tile('rD', false).getPosition()).toBe('H8');
      });

      // Testing bishop dark position
      it('bD user', () => {
        expect(new Tile('bD').getPosition()).toBe('C1');
      });
      it('bD AI', () => {
        expect(new Tile('bD', false).getPosition()).toBe('F8');
      });

      // Testing bishop light position
      it('bL user', () => {
        expect(new Tile('bL').getPosition()).toBe('F1');
      });
      it('bL AI', () => {
        expect(new Tile('bL', false).getPosition()).toBe('C8');
      });

      // Testing knight light position
      it('kL user', () => {
        expect(new Tile('kL').getPosition()).toBe('B1');
      });
      it('kL AI', () => {
        expect(new Tile('kL', false).getPosition()).toBe('G8');
      });

      // Testing knight dark position
      it('kD user', () => {
        expect(new Tile('kD').getPosition()).toBe('G1');
      });
      it('kD AI', () => {
        expect(new Tile('kD', false).getPosition()).toBe('B8');
      });
    });
    describe('if not initial position', () => {
        it('if not initial position, a valid position should be sent', () => {
            expect(() => new Tile('Q', true, false)).toThrowError("If not initial a valid position should be sent")
            expect(() => new Tile('Q', true, false, 'B2')).not.toThrow()
            expect(new Tile('Q', true, false, 'B2').getPosition()).toBe('B2')
        })
    })
  });
});
