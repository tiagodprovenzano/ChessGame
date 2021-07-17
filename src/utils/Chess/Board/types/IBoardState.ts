import Tile from "../../Tiles";
import { ITileType } from "../../Tiles/types/ITileType";
import { IPositions } from "./IPositons";

export type IBoardState = Array<
{ position: IPositions; tile?: Tile, tileType?: ITileType, userTile?: boolean} & ({ tileType: ITileType; userTile: boolean; } | {})>;
