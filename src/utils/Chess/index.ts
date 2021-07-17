import Board from "./Board";

export default class Chess {
    private _board: Board

    constructor(){
        this._board = new Board();
    }
}