import React, {useContext, useEffect, useState} from 'react';
import {LayoutChangeEvent, Text, View, Image} from 'react-native';
import {getIndexIdentifier} from './library/getIndexIdentifier';
import {colorSelector} from './library/colorSelector';
import {TileContainer} from './TileContainer';
import {ChessContext} from '../utils/Context/ChessContext';
import {IPositions} from '../utils/Chess/Board/types/IPositons';
import {ITileType} from '../utils/Chess/Tiles/types/ITileType';

const blackPawn = require('../../assets/blackPawn.png');
const whitePawn = require('../../assets/whitePawn.png');

export const SpaceContainer: React.FC<{index: number; spaceWidth: number}> = ({
  index,
  spaceWidth,
}) => {
  const [color] = useState<string>(colorSelector(index));
  const [identifier] = useState<IPositions>(getIndexIdentifier(index));

  return (
    <View
      key={identifier}
      testID={'SpaceContainer'}
      style={{
        width: spaceWidth,
        height: spaceWidth,
        backgroundColor: color,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
      }}>
      <Text
        testID={'SpaceIdentifierLabel'}
        style={{display: 'none', color: color === '#000' ? '#fff' : '#000'}}>
        {identifier}
      </Text>
      <TileContainer spaceWidth={spaceWidth} position={identifier}/>
    </View>
  );
};
