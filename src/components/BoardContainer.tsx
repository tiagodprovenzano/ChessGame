import React, { useState, useEffect } from "react";
import { Dimensions, View, ScrollView, TouchableOpacity, Text } from "react-native";
import { AnimatedTile } from "./AnimatedTile";
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
        <View style={{flex:1}}>
            <ScrollView style={{maxHeight: Dimensions.get('window').width}} showsHorizontalScrollIndicator={true}>
                <ScrollView horizontal>
                    <View testID={'BoardContainer'} style={{ width, height: width, flexWrap: 'wrap' }}>
                        {spaces.map((_, index) => <SpaceContainer key={index} index={index} spaceWidth={spaceWidth}/>)} 
                    </View>
                    <AnimatedTile spaceWidth={spaceWidth} />
                </ScrollView>
            </ScrollView>
            <View style={{alignSelf: 'stretch', maxHeight: 100, flex:1}}>
                <ResizeButton setWidth={setWidth} width={width} />
            </View>
        </View>
    )
}