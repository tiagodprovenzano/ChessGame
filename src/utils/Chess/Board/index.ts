import Tile from '../Tiles';
import { ITileType } from '../Tiles/types/ITileType';
import { IChessSubscriptions } from '../types/IChessSubscriptions';
import { ISelectedTile } from '../types/ISelectedTile';
import { ISpacePositions } from '../TileAnimation/types/ISpacePositions';
import { initialBoardState } from './static/initialBoardState';
import { validPositions } from './static/validPositions';
import { IBoardState } from './types/IBoardState';
import {IPositions} from './types/IPositons';
import { TileAnimation } from '../TileAnimation';

export default class Board {
  static validPositions: IPositions[] = validPositions;
  private _userTileColor: 'white' | 'black'
  private _boardState: IBoardState
  private _selectedTile: ISelectedTile | undefined = undefined 
  private _subscriptions: Record<IChessSubscriptions, Array<(value: any) => void>> = {
    CHANGE_BOARD_STATE: [],
    SELECTED_TILE: []
  }

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
    this.triggerSubscriptions('CHANGE_BOARD_STATE')
  }

  private triggerSubscriptions(action: IChessSubscriptions){
    switch (action) {
      case 'CHANGE_BOARD_STATE':
        this._subscriptions.CHANGE_BOARD_STATE.forEach(cb => cb(this._boardState))
        break;
      case 'SELECTED_TILE':
        this._subscriptions.SELECTED_TILE.forEach(cb => cb(this._selectedTile))
        break;
    
      default:
        break;
    }
  }

  setSelectedTile = (position: IPositions, tileType: ITileType) => {
    if(!this._selectedTile || this._selectedTile.position !== position){
      this._selectedTile = {position, tileType}
    }else{
      this._selectedTile = undefined
    }
    this.triggerSubscriptions('SELECTED_TILE')
  }

  getPositionState = (position: IPositions) => {
    return this._boardState.find(a => a.position === position)
  }

  subscribe(action: IChessSubscriptions, callback: (value: any) => void){
    this._subscriptions[action].push(callback);
  }

  updateTilePosition(newPosition: IPositions, oldPosition: IPositions){
    const oldPositionState = this._boardState.find((a) => a.position === oldPosition);
    if(oldPositionState){
      const {tileType, userTile} = oldPositionState
      if(tileType){
        const tile = new Tile(tileType, userTile, false, newPosition)
        this._boardState = this._boardState.filter((a) => a.position !== oldPosition && a.position !==newPosition);
        this._boardState.push(
          {position: newPosition, tileType: tileType, userTile, tile},
          {position: oldPosition}
        )
        this._boardState = [...this._boardState]
        this._selectedTile = undefined
        this.triggerSubscriptions('CHANGE_BOARD_STATE')
        this.triggerSubscriptions('SELECTED_TILE')
      }
    }
  }
  
  moveTo(position: IPositions){
    if(this._selectedTile){
      TileAnimation.moveTo(position)
      const oldPosition = this._selectedTile.position;
      this.updateTilePosition(position, oldPosition);
    }
  }
}
