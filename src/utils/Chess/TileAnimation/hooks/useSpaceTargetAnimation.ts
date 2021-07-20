import {useEffect, useState} from 'react';
import {TileAnimation} from '..';

export const useSpaceTargetAnimation = (subscribe = true) => {
  const [spaceTargetAnimation, setSpaceTargetAnimation] = useState(
    TileAnimation.renderTileAnimation,
  );

  useEffect(() => {
    TileAnimation.subscribe(setSpaceTargetAnimation, 'RENDER_ANIMATION');
  }, []);

  return [spaceTargetAnimation];
};
