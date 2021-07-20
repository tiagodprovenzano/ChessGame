import { IPositions } from "../../Board/types/IPositons";

export type ITileAnimationConfig = {
    from: {
        x: number;
        y: number;
        id: IPositions;
    };
    to: {
        x: number;
        y: number;
        id: IPositions;
    };
    tileImageSrc: any;
};
