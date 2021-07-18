import { useContext } from "react"
import Chess from "../Chess"
import { ChessContext } from "../Context/ChessContext"

export const useChess = (): [Chess] => {
    const {Chess} = useContext(ChessContext)
    return [Chess]
}