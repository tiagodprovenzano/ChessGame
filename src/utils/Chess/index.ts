import Board from "./Board";
import { IPositions } from "./Board/types/IPositons";
import { TileAnimation } from "./TileAnimation";
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

    setSelectedTile = (position: IPositions, tileType: ITileType, imageSrc: any) => {
        this._board.setSelectedTile(position, tileType)
        TileAnimation.setTileToMove(position, imageSrc)
    }

    moveTo = (position: IPositions) => {
        this._board.moveTo(position)
        TileAnimation.moveTo(position)
    }

    subscribe(action: IChessSubscriptions, callback: (value: any) => void){
        this._board.subscribe(action, callback)
    }
}