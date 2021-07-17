import { Dimensions } from "react-native"

export const resizePressedCallback = (): number => {
    
    const min = 50
    const max = Dimensions.get('window').width
    
    const newWidth = Math.ceil(Math.random() * max)
    
    return newWidth > min? newWidth:min
}