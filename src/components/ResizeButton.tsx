import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {resizePressedCallback} from './library/resizePressedCallback';
import Slider from '@react-native-community/slider';
interface Props {
  setWidth?: (newWidth: number) => void;
  width: number;
}

export const ResizeButton: React.FC<Props> = props => {
  const {setWidth, width} = props;
  const [screenWidth] = useState(Dimensions.get('window').width);
  const onPress = () => {
    if (setWidth) setWidth(resizePressedCallback());
  };

  const resetWidth = () => {
    if (setWidth) setWidth(Dimensions.get('window').width);
  };

  return (
    <View style={{flexDirection: 'row', maxHeight: 50}}>
      <TouchableOpacity
        style={{display: 'none'}}
        onPress={onPress}
        testID={'ResizeButton'}>
        <Text>Resize</Text>
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Slider
          testID={'ResizeSlider'}
          minimumValue={50}
          maximumValue={Dimensions.get('window').width * 2}
          onSlidingComplete={setWidth}
          value={width}
        />
      </View>
      {screenWidth !== width && (
        <TouchableOpacity
          testID={'ResetButton'}
          onPress={resetWidth}
          style={{marginRight: 15, backgroundColor: '#e2e2e2'}}>
          <Text>Reset</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
