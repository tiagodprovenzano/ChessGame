import {IPositions} from '../Board/types/IPositons';
import {initialPositions} from './static/initialPositions';
import {validTypes} from './static/validTypes';
import {IInitialPositions} from './types/IInitialPositions';
import {ITileType} from './types/ITileType';

export class Tile {
  type: ITileType;
  userTile: boolean;
  position: IPositions;

  static validTypes: ITileType[] = validTypes;
  private static initialPositions: IInitialPositions = initialPositions;
  constructor(
    type: ITileType,
    userTile: boolean = true,
    initial: boolean = true,
  ) {
    if (!Tile.validTypes.includes(type)) {
      throw new Error('Invalid tile type');
    }
    if (typeof userTile !== 'boolean') {
      throw new Error('UserTile should be a boolean');
    }

    this.type = type;
    this.userTile = userTile;
    if (initial) {
        this.position = this.getInitialPosition()
    }
  }

  getInitialPosition = (): IPositions => {
    const tileInitialPosition = Tile.initialPositions.find(
      a => a.tileType === this.type,
    );
    if (!tileInitialPosition) throw new Error('Invalid tile type');

    if (this.userTile) {
      return tileInitialPosition.user;
    } else {
      return tileInitialPosition.AI;
    }
  };
}
