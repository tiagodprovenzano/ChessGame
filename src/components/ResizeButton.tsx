import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { resizePressedCallback } from "./library/resizePressedCallback";

interface Props {
    setWidth?: (newWidth: number) => void
}

export const ResizeButton: React.FC<Props> = (props) => {
    const { setWidth } = props
    const onPress= () => {
        if(setWidth) setWidth(resizePressedCallback())
    }

    return (
        <TouchableOpacity onPress={onPress} testID={'ResizeButton'}>
            <Text>
                Resize
            </Text>
        </TouchableOpacity>
    )
}