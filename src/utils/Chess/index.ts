import Board from "./Board";
import { IPositions } from "./Board/types/IPositons";
import { ITileType } from "./Tiles/types/ITileType";

export default class Chess {
    private _board: Board

    constructor(){
        this._board = new Board();
    }

    getPositionState(position: IPositions): ITileType | undefined{
        return this._board.getPositionState(position)?.tileType
    }
}