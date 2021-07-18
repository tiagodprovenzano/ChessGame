import {useEffect, useState} from 'react';
import {ISelectedTile} from '../Chess/types/ISelectedTile';
import {useChess} from './useChess';

export const useSelectedTile = (subscribe = true): [ISelectedTile | undefined] => {
  const [Chess] = useChess();
  const [selectedTile, setSelectedTile] = useState<ISelectedTile | undefined>();

  useEffect(() => {
    if(subscribe){
        Chess.subscribe('SELECTED_TILE', setSelectedTile);
    }  
  }, []);
  return [selectedTile]
};
