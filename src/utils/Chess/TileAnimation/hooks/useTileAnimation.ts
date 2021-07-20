import { useContext, useState } from "react"
import { ChessContext } from "../../../Context/ChessContext"

export const useTileAnimation = () => {
    return [useContext(ChessContext).TileAnimation]
    
}