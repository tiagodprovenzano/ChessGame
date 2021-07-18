import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {getIndexIdentifier} from './library/getIndexIdentifier';
import {colorSelector} from './library/colorSelector';
import {TileContainer} from './TileContainer';
import {IPositions} from '../utils/Chess/Board/types/IPositons';
import { useChess } from '../utils/hooks/useChess';
import { useSelectedTile } from '../utils/hooks/useSelectedTile';

export const SpaceContainer: React.FC<{index: number; spaceWidth: number}> = ({
  index,
  spaceWidth,
}) => {
  const [color] = useState<string>(colorSelector(index));
  const [identifier] = useState<IPositions>(getIndexIdentifier(index));
  const [disableSpace, setDisableSpace] = useState(false)
  const [selectedTile] = useSelectedTile()

  return (
    <TouchableOpacity
      key={identifier}
      activeOpacity={0.5}
      disabled={disableSpace}
      testID={'SpaceContainer'}
      style={{
        width: spaceWidth,
        height: spaceWidth,
        backgroundColor: color,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        borderWidth: selectedTile?.position === identifier? 3:0,
        borderColor: selectedTile?.position === identifier? 'yellow':'transparent'
      }}>
      <Text
        testID={'SpaceIdentifierLabel'}
        style={{display: 'none', color: color === '#000' ? '#fff' : '#000'}}>
        {identifier}
      </Text> 
      <TileContainer setDisableSpace={setDisableSpace} spaceWidth={spaceWidth} position={identifier}/>
    </TouchableOpacity>
  );
};
