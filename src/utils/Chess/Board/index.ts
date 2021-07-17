import { initialBoardState } from './static/initialBoardState';
import { validPositions } from './static/validPositions';
import { IBoardState } from './types/IBoardState';
import {IPositions} from './types/IPositons';

export class Board {
  static validPositions: IPositions[] = validPositions;
  private _userTileColor: 'white' | 'black'
  private _boardState: IBoardState
  constructor(
    userTileColor:  'white' | 'black' = 'white',
    boardState: IBoardState = initialBoardState
  ){
    this._userTileColor = userTileColor
    this._boardState = boardState
  }

  public get userTileColor(){
    return this._userTileColor
  }

  public get boardState(){
    return this._boardState
  }
}
