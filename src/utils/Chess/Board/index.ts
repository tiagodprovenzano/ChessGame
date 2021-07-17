import Tile from '../Tiles';
import { initialBoardState } from './static/initialBoardState';
import { validPositions } from './static/validPositions';
import { IBoardState } from './types/IBoardState';
import {IPositions} from './types/IPositons';

export default class Board {
  static validPositions: IPositions[] = validPositions;
  private _userTileColor: 'white' | 'black'
  private _boardState: IBoardState
  constructor(
    userTileColor:  'white' | 'black' = 'white',
    boardState: IBoardState = initialBoardState
  ){
    this._userTileColor = userTileColor
    this._boardState = boardState
    this.getTilesInstances()
  }

  public get userTileColor(){
    return this._userTileColor
  }

  public get boardState(){
    return this._boardState
  }

  private getTilesInstances = () => {
    this._boardState = this._boardState.map((state) => {
      const {tileType, userTile, position} = state
      let tile;
      if(tileType){
        tile = new Tile(tileType, userTile, false, position)
      }
      return {tile, tileType, userTile, position}
    })
  }

  getPositionState = (position: IPositions) => {
    return this._boardState.find(a => a.position === position)
  }
}
