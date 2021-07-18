import {useEffect, useState} from 'react';
import {IBoardState} from '../Chess/Board/types/IBoardState';
import {useChess} from './useChess';

export const useBoardState = (subscribe: boolean = true): [IBoardState] => {
  const [Chess] = useChess();
  const [boardState, setBoardState] = useState<IBoardState>([]);

  useEffect(() => {
    if (subscribe) {
      Chess.subscribe('CHANGE_BOARD_STATE', setBoardState);
    }
  }, []);

  return [boardState];
};
