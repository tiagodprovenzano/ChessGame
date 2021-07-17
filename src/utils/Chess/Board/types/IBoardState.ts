import { ITileType } from "../../Tiles/types/ITileType";
import { IPositions } from "./IPositons";

export type IBoardState = Array<{ position: IPositions; } & ({ tile: ITileType; userTile: boolean; } | {})>;
