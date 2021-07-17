import React, {useContext} from "react";
import Chess from '../Chess'

export const ChessContextInitialState = {
    Chess: new Chess()
}

export const ChessContext = React.createContext(ChessContextInitialState)