import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Text, Image, View} from 'react-native';
import { TileAnimation } from '../utils/Chess/TileAnimation';
import {useSpaceTargetAnimation} from '../utils/Chess/TileAnimation/hooks/useSpaceTargetAnimation';
import {useTileToMove} from '../utils/Chess/TileAnimation/hooks/useTileToMove';
import {getTileImagesSources} from './library/getTileImagesSources';

interface Props {
  spaceWidth: number;
}

export const AnimatedTile: React.FC<Props> = props => {
  const {spaceWidth} = props;
  const translate = useRef(new Animated.ValueXY({x:0, y:0})).current;
  const [tileToMove] = useTileToMove();
  const [spaceTargetAnimation] = useSpaceTargetAnimation();

  
  const spaceSelectedCallback = useCallback((targetAnimation: any) => {
    console.log(targetAnimation, translate)
    if(targetAnimation){
      const targetX = targetAnimation.to.x
      const targety = targetAnimation.to.y
      Animated.timing(translate, {toValue: {x:targetX - targetAnimation?.from.x, y: targety - targetAnimation?.from.y}, useNativeDriver: true, duration: 100}).start(() => {
        setTimeout( () => {
          TileAnimation.reset()
          translate.setValue({x:0, y:0})
        }, 0)
      });
    }
    
  }, [translate])
  
  useEffect(() => {
    if(!tileToMove){
      TileAnimation.registerToCallback(spaceSelectedCallback)
    }
  }, [tileToMove])

  if (!!(tileToMove)) {
    return (
      <Animated.View 
        
        style={{
          transform: [{translateX: translate.x}, {translateY: translate.y}],
          left: tileToMove.from.x,
          top: tileToMove.from.y,
          width: spaceWidth ,
          height: spaceWidth ,
          backgroundColor: 'transparent',
          position: 'absolute',
          alignItems:'center',
          justifyContent: 'center'
        }}>
        <Image
          source={tileToMove.tileImageSrc}
          width={spaceWidth * 0.8}
          style={{
            display: tileToMove ? 'flex' : 'none',
            width: spaceWidth * 0.7,
            height: spaceWidth * 0.7,
            zIndex: 99,
          }}
        />
      </Animated.View >
    );
  }
  return null;
};
