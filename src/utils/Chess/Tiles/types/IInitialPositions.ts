import { IPositions } from "../../Board/types/IPositons";
import { ITileType } from "./ITileType";

interface IValidInitialPosition {
    tileType: ITileType;
    user: IPositions;
    AI: IPositions;
}
export type IInitialPositions = Array<IValidInitialPosition>;
