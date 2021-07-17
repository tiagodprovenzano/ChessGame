import React, { useEffect, useState } from "react";
import { LayoutChangeEvent, Text, View } from "react-native";
import { getIndexIdentifier } from "./library/getIndexIdentifier";
import { colorSelector } from "./library/colorSelector";



export const SpaceContainer: React.FC<{ index: number; spaceWidth: number; }> = ({ index, spaceWidth }) => {
    const [color] = useState<string>(colorSelector(index))
    const [identifier] = useState<string>(getIndexIdentifier(index) + '')

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
            <Text testID={'SpaceIdentifierLabel'} style={{color: color === '#000'? '#fff': '#000'}}>{identifier}</Text>
        </View>
    );
};
