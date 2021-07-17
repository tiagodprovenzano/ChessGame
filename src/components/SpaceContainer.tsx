import React, { useEffect, useState } from "react";
import { LayoutChangeEvent, Text, View } from "react-native";
import { colorSelector } from "./library/colorSelector";

const columns: Record<number, string> = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H'
}

export const SpaceContainer: React.FC<{ index: number; spaceWidth: number; }> = ({ index, spaceWidth }) => {
    const [color] = useState<string>(colorSelector(index))
    const [identifier, setIdentifier] = useState<string>(index + '')

    // useEffect(() => {
    //     setColor(colorSelector(index))
    // }, [])
    
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
            <Text testID={'SpaceIdentifierLabel'} style={{color: color === '#000'? '#fff': '#000'}}>{index}</Text>
        </View>
    );
};
