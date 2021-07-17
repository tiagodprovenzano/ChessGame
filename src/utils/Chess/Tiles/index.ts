import { ITileType } from "./types/ITileType"

export class Tile {
    type: ITileType
    userTile: boolean
    private static validTypes: ITileType[] = [
        'Q', 'b', 'k', 'p', 'q', 'r'
    ]
    constructor(
        type: ITileType,
        userTile: boolean = true
    ){
        if(!Tile.validTypes.includes(type)){
            throw new Error("Invalid tile type");
        }
        if(typeof userTile !== 'boolean'){
            throw new Error("UserTile should be a boolean");
        }

        this.type = type
        this.userTile = userTile
    }
}