import React, { useContext, useEffect, useState } from "react";
import { LayoutChangeEvent, Text, View } from "react-native";
import { getIndexIdentifier } from "./library/getIndexIdentifier";
import { colorSelector } from "./library/colorSelector";
import { Tile } from "./Tile";
import { ChessContext } from "../utils/Context/ChessContext";
import { IPositions } from "../utils/Chess/Board/types/IPositons";
import { ITileType } from "../utils/Chess/Tiles/types/ITileType";



export const SpaceContainer: React.FC<{ index: number; spaceWidth: number; }> = ({ index, spaceWidth }) => {
    const [color] = useState<string>(colorSelector(index))
    const [identifier] = useState<IPositions>(getIndexIdentifier(index))
    const [tile, setTile] = useState<ITileType>()
    const { Chess } = useContext(ChessContext)

    useEffect(() => {
        if(Chess){
            setTile(Chess.getPositionState(identifier))
            
        }
    }, [Chess])

    return (
        <View
            key={identifier} 
            testID={'SpaceContainer'}
            style={{ 
                width: spaceWidth,
                height: spaceWidth, 
                backgroundColor: color,
                flex:0,
                alignItems: 'center',
                justifyContent: 'center' 
            }} 
        >
            <Text testID={'SpaceIdentifierLabel'} style={{display: 'none', color: color === '#000'? '#fff': '#000'}}>{identifier}</Text>
            <Text testID={'TileLabel'} style={{color: color === '#000'? '#fff': '#000'}}>{tile}</Text>
            <Tile />
        </View>
    );
};
