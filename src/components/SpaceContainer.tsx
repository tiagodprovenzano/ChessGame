import React, {useContext, useEffect, useState} from 'react';
import {LayoutChangeEvent, Text, View, Image} from 'react-native';
import {getIndexIdentifier} from './library/getIndexIdentifier';
import {colorSelector} from './library/colorSelector';
import {Tile} from './Tile';
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
  const [tile, setTile] = useState<ITileType>();
  const {Chess} = useContext(ChessContext);

  useEffect(() => {
    if (Chess) {
      setTile(Chess.getPositionState(identifier));
    }
  }, [Chess]);

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
      }}>
      <Text
        testID={'SpaceIdentifierLabel'}
        style={{display: 'none', color: color === '#000' ? '#fff' : '#000'}}>
        {identifier}
      </Text>
      <Text
        testID={'TileLabel'}
        style={{display: 'none', color: '#000' ? '#fff' : '#000'}}>
        {tile}
      </Text>
      {tile && (
        <Image
          testID={'TileImage' + tile}
          source={whitePawn}
          width={spaceWidth * 0.8}
          resizeMethod={'scale'}
          style={{
            width: spaceWidth * 0.7,
            height: spaceWidth * 0.7,
            alignSelf: 'center',
          }}
        />
      )}
      <Tile />
    </View>
  );
};
