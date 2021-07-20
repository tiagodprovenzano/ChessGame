import {useEffect, useState} from 'react';
import {TileAnimation} from '..';

export const useTileToMove = (subscribe = true) => {
  const [tileToMove, setTileToMove] = useState(TileAnimation.tileToMove);

  useEffect(() => {
    if (subscribe) {
      TileAnimation.subscribe(setTileToMove, 'SET_ORIGIN_TILE');
    }
  }, []);

  return [tileToMove];
};
