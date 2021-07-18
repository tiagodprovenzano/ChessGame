import { useContext, useEffect, useState } from "react"
import Chess from "../Chess"
import { IBoardState } from "../Chess/Board/types/IBoardState"
import { ChessContext } from "../Context/ChessContext"

export const useChessContext = (subscribe: boolean = true): [Chess, IBoardState] => {
    const {Chess} = useContext(ChessContext)
    const [boardState, setBoardState] = useState<IBoardState>(Chess.getBoardState())

    useEffect(() => {
        if(subscribe){
            Chess.subscribe('CHANGE_BOARD_STATE', setBoardState)
        }
    }, [])

    return [Chess, boardState]
}