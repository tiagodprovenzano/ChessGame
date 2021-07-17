import React, { useState, useEffect } from "react";
import { Dimensions, View } from "react-native";
import { ResizeButton } from "./ResizeButton";
import { SpaceContainer } from "./SpaceContainer";

export const BoardContainer: React.FC = () => {
    const [width, setWidth] = useState(Dimensions.get('window').width)
    const [spaceWidth, setSpaceWidth] = useState(width/8);
    const [spaces] = useState( new Array(64).fill('a'))

    useEffect(() => {
        setSpaceWidth(width/8)
    }, [width, setSpaceWidth])

    return (
        <View>
            <View testID={'BoardContainer'} style={{ width, height: width, flexWrap: 'wrap' }}>
                {spaces.map((_, index) => <SpaceContainer key={index} index={index} spaceWidth={spaceWidth}/>)} 
            </View>
            <ResizeButton setWidth={setWidth} />
        </View>
    )
}