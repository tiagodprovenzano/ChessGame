import Board from "./Board";
import { IPositions } from "./Board/types/IPositons";
import { ITileType } from "./Tiles/types/ITileType";
import { IChessSubscriptions } from "./types/IChessSubscriptions";

export default class Chess {
    private _board: Board

    constructor(){
        this._board = new Board();
    }

    getPositionState(position: IPositions): ITileType | undefined{
        return this._board.getPositionState(position)?.tileType
    }

    getBoardState(){
        return this._board.boardState
    }

    getIsUserTile(position: IPositions): boolean | undefined{
        return this._board.getPositionState(position)?.userTile
    }

    getUserTileColor(): 'black'|'white'{
        return this._board.userTileColor
    }

    subscribe(action: IChessSubscriptions, callback: (value: any) => void){
        this._board.subscribe(action, callback)
    }
}