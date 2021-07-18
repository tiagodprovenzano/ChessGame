import React, {useContext, useState, useEffect, useCallback} from 'react';
import {Text, View, Image, Animated, TouchableOpacity} from 'react-native';
import {IPositions} from '../utils/Chess/Board/types/IPositons';
import Tile from '../utils/Chess/Tiles';
import {ITileType} from '../utils/Chess/Tiles/types/ITileType';
import {ChessContext} from '../utils/Context/ChessContext';
import { useChessContext } from '../utils/hooks/useChessContext';
import {getTileImagesSources} from './library/getTileImagesSources';

interface Props {
  spaceWidth: number;
  position: IPositions;
  tile?: Tile;
}

export const TileContainer: React.FC<Props> = props => {
  const {spaceWidth, position, tile} = props;
  const [tileId, setTileId] = useState<string>();
  const [imageSrc, setImageSrc] = useState<any>();
  const [Chess, boardState] = useChessContext()

  console.log('boardState', boardState)

  useEffect(() => {
    const tileType = Chess.getPositionState(position);
    if (tileType) {
      const isUserTile = Chess.getIsUserTile(position);
      const color =
        Chess.getUserTileColor() === 'black'
          ? isUserTile
            ? 'B'
            : 'W'
          : isUserTile
          ? 'W'
          : 'B';
      setImageSrc(getTileImagesSources(tileType, color));
      setTileId(`${color}${tileType}`);
    }
  }, []);

  const onPress = useCallback(() => {
    const isUserTile = Chess.getIsUserTile(position);
  }, [spaceWidth]);

  return (
    <TouchableOpacity onPress={onPress} testID={'TileView'+tileId}>
      <Text
        testID={'TileLabel'}
        style={{display: 'none', color: '#000' ? '#fff' : '#000'}}>
        {tileId}
      </Text>
      {tileId && (
        <Image
          testID={'TileImage' + tileId}
          source={imageSrc}
          width={spaceWidth * 0.8}
          resizeMethod={'scale'}
          style={{
            width: spaceWidth * 0.7,
            height: spaceWidth * 0.7,
            alignSelf: 'center',
            zIndex: 99,
          }}
        />
      )}
    </TouchableOpacity>
  );
};
