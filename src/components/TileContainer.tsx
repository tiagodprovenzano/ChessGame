import React, {useContext, useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {IPositions} from '../utils/Chess/Board/types/IPositons';
import Tile from '../utils/Chess/Tiles';
import {ITileType} from '../utils/Chess/Tiles/types/ITileType';
import {ChessContext} from '../utils/Context/ChessContext';
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
  const {Chess} = useContext(ChessContext);

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
  return (
    <View testID={'TileView'}>
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
          }}
        />
      )}
    </View>
  );
};
