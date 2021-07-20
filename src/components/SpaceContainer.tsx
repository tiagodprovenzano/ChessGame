import React, {useCallback, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  LayoutChangeEvent,
} from 'react-native';
import {getIndexIdentifier} from './library/getIndexIdentifier';
import {colorSelector} from './library/colorSelector';
import {TileContainer} from './TileContainer';
import {IPositions} from '../utils/Chess/Board/types/IPositons';
import {useChess} from '../utils/hooks/useChess';
import {useSelectedTile} from '../utils/hooks/useSelectedTile';
import {useBoardState} from '../utils/hooks/useBoardState';
import {useTileAnimation} from '../utils/Chess/TileAnimation/hooks/useTileAnimation';
import {useTileToMove} from '../utils/Chess/TileAnimation/hooks/useTileToMove';
import {useSpaceTargetAnimation} from '../utils/Chess/TileAnimation/hooks/useSpaceTargetAnimation';

export const SpaceContainer: React.FC<{index: number; spaceWidth: number}> = ({
  index,
  spaceWidth,
}) => {
  const [color] = useState<string>(colorSelector(index));
  const [identifier] = useState<IPositions>(getIndexIdentifier(index));
  const [selected, setSelected] = useState(false);
  const [disableSpace, setDisableSpace] = useState(false);
  const [selectedTile] = useSelectedTile();
  const [Chess] = useChess();
  const [TileAnimaton] = useTileAnimation();
  const [tileToMove] = useTileToMove();
  const [spaceTargetAnimation] = useSpaceTargetAnimation();
  const onPress = useCallback(() => {
    if (selectedTile) {
      Chess.moveTo(identifier);
    } else {
      setSelected(false)
    }
  }, [identifier, Chess, selectedTile]);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const {x, y} = e.nativeEvent.layout;
    TileAnimaton.registerPosition(identifier, x, y);
  }, []);

  return (
    <TouchableOpacity
      key={identifier}
      activeOpacity={0.5}
      disabled={disableSpace}
      testID={'SpaceContainer'}
      onPress={onPress}
      onLayout={onLayout}
      style={{
        width: spaceWidth,
        height: spaceWidth,
        backgroundColor: color,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        borderWidth: selectedTile?.position === identifier ? 3 : 0,
        borderColor:
          (selectedTile?.position === identifier || selected) ? 'yellow' : 'transparent',
      }}>
      <Text
        testID={'SpaceIdentifierLabel'}
        style={{display: 'none', color: color === '#000' ? '#fff' : '#000'}}>
        {identifier}
      </Text>
      { (
          <View style={{
            display: ((!tileToMove || tileToMove?.from.id !== identifier) &&
            (!spaceTargetAnimation ||
              spaceTargetAnimation.to.id !== identifier) && 'flex') || 'none'
          }}>
            <TileContainer
              setDisableSpace={setDisableSpace}
              spaceWidth={spaceWidth}
              position={identifier}
              setSelected={setSelected}
            />
          </View>  
        )}
    </TouchableOpacity>
  );
};
