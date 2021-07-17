import React from "react";
import { View } from "react-native";
import { BoardContainer } from "./components/BoardContainer";

export const ChessableBoard: React.FC = () => {
    return (
        <View style={{flex:1}}>
            <BoardContainer />
        </View>
    )
}