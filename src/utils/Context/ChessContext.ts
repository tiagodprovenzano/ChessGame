import React, {useContext} from "react";
import Chess from '../Chess'
import { TileAnimation } from "../Chess/TileAnimation";

export const ChessContextInitialState = {
    Chess: new Chess(),
    TileAnimation
}

export const ChessContext = React.createContext(ChessContextInitialState)