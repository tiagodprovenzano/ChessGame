import { Tile } from ".."
import { ITileType } from "../types/ITileType"

describe('Testing Tile Class', () => {
    it('Tile should have a type', () => {
        const tile = new Tile('Q')
        expect(tile.type).not.toBeUndefined()
    })
    it('Tile type should be a valid type', () => {
        const validTypes: ITileType[] = [
            'Q', 'b', 'k', 'p', 'q', 'r'
        ]
        const tile = new Tile('q')
        expect(tile.type).not.toBeUndefined()
        expect(validTypes.includes(tile.type)).toBe(true)
    })
    it('If invalid type is sent, throw an Error', () => {
        // @ts-ignore
        expect(() => new Tile('e')).toThrowError('Invalid tile type')
        // @ts-ignore
        expect(() => new Tile(true)).toThrowError('Invalid tile type')
    })
    it('Tile contructor receives if tile is from user or AI', () => {
        expect(new Tile('q').userTile).toBe(true)
        expect(new Tile('q', false).userTile).toBe(false)
    })
    it('If invalid useTile is sent, throw an Error', () => {
        // @ts-ignore
        expect(() => new Tile('q', 'true')).toThrowError('UserTile should be a boolean')
        // @ts-ignore
        expect(() => new Tile('q', 'boolean')).toThrowError('UserTile should be a boolean')
    })
})