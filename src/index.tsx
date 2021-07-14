import React from "react";
import { Text, View, Dimensions } from "react-native";

export const ChessableBoard: React.FC = () => {
    return (
        <View>
            <View testID={'BoardContainer'} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width, backgroundColor: '#000' }}>
                <Text>
                    Hello Chessable Board
                </Text>
            </View>
        </View>
    )
}