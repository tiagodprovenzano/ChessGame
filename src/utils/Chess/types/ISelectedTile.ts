import { ITileType } from '../Tiles/types/ITileType';
import { IPositions } from '../Board/types/IPositons';

export interface ISelectedTile {
  position: IPositions;
  tileType: ITileType;
}
