import {IPositions} from '../Board/types/IPositons';
import {ITileType} from '../Tiles/types/ITileType';
import {ITileAnimationActions} from './types/ITileAnimationActions';
import {ITileAnimationConfig} from './types/ITileAnimationConfig';
import {ITileAnimationSubscriptions} from './types/ITileAnimationSubscriptions';
import {ISpacePositions} from './types/ISpacePositions';

export class TileAnimation {
  private static _positions: ISpacePositions[] = [];

  private static subscriptions: ITileAnimationSubscriptions = {
    RENDER_ANIMATION: [],
    SET_ORIGIN_TILE: [],
  };

  private static _renderTileAnimation: ITileAnimationConfig | null = null;
  private static _tileToMove: Omit<ITileAnimationConfig, 'to'> | null = null;
  private static _toCallback: ((config: ITileAnimationConfig) => void) | null =
    null;
  public static get tileToMove() {
    return this._tileToMove;
  }
  public static get renderTileAnimation() {
    return this._renderTileAnimation;
  }

  private static _addPosition = (id: IPositions, x: number, y: number) => {
    this._positions.push({id, x, y});
  };

  static registerPosition = (id: IPositions, x: number, y: number) => {
    if (!this._positions.find(a => a.id === id)) {
      this._addPosition(id, x, y);
    } else {
      this._updatePosition(id, x, y);
    }
  };

  private static _updatePosition = (id: IPositions, x: number, y: number) => {
    this._positions = this._positions.map(p => {
      if (p.id === id) {
        p.x = x;
        p.y = y;
      }

      return p;
    });
  };

  static subscribe(
    callback: (value: any) => void,
    action: ITileAnimationActions = 'RENDER_ANIMATION',
  ) {
    switch (action) {
      case 'RENDER_ANIMATION':
        this.subscriptions.RENDER_ANIMATION.push(callback);
        break;
      case 'SET_ORIGIN_TILE':
        this.subscriptions.SET_ORIGIN_TILE.push(callback);
        break;

      default:
        break;
    }
  }

  private static triggerSubscriptions = (action: ITileAnimationActions) => {
    switch (action) {
      case 'RENDER_ANIMATION':
        this.subscriptions.RENDER_ANIMATION.forEach(c =>
          c(this._renderTileAnimation),
        );
        break;
      case 'SET_ORIGIN_TILE':
        this.subscriptions.SET_ORIGIN_TILE.forEach(c => c(this._tileToMove));
        break;

      default:
        break;
    }
  };

  private static _getPositionXY = (position: IPositions) => {
    const xy = this._positions.find(s => s.id === position);
    return xy;
  };

  static setTileToMove = (position: IPositions, tileImageSrc: any) => {
    const currentPosition = this._getPositionXY(position);
    if (currentPosition) {
      this._tileToMove = {
        from: {x: currentPosition.x, y: currentPosition.y, id: position},
        tileImageSrc,
      };
      this.triggerSubscriptions('SET_ORIGIN_TILE');
    }
  };

  static moveTo = (position: IPositions) => {
    const currentPosition = this._getPositionXY(position);
    if (currentPosition && this._tileToMove) {
      this._renderTileAnimation = {
        ...this._tileToMove,
        to: {x: currentPosition.x, y: currentPosition.y, id: position},
      };
      this.triggerSubscriptions('RENDER_ANIMATION');
      if (this._toCallback) {
        this._toCallback(this._renderTileAnimation);
      }
    }
  };

  static reset = () => {
    this._tileToMove = null;
    this.triggerSubscriptions('SET_ORIGIN_TILE');
    this._renderTileAnimation = null;
    this.triggerSubscriptions('RENDER_ANIMATION');
  };

  static registerToCallback = (
    callback: (config: ITileAnimationConfig) => void,
  ) => {
    this._toCallback = callback;
  };
}
