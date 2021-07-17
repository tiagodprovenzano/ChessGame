import React from "react";
import { View } from "react-native";
import { BoardContainer } from "./components/BoardContainer";
import { ChessContext, ChessContextInitialState } from "./utils/Context/ChessContext";

export const ChessableBoard: React.FC = () => {
    return (
        <View style={{flex:1}}>
            <ChessContext.Provider value={ChessContextInitialState}>
                <BoardContainer />
            </ChessContext.Provider>
        </View>
    )
}