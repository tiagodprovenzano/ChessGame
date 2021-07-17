import { Board } from '../'

describe('Testing chess Board class', () => {
    describe('When calling empty constructor, start a game with user as white tiles', () => {
        it('empty constructor should set userTiles color to white', () => {
            const board = new Board()
            expect(board.userTileColor).toBe('white')
        })

        it('empty constructor start game with initialPositions as state', () => {
            const board = new Board()
            expect(Array.isArray(board.boardState)).toBe(true)
            expect(board.boardState.find((a) => a.tileType==="Q" && a.userTile)?.position).toBe("D1")
            expect(board.boardState.find((a) => a.position==="A5")?.userTile).toBeUndefined()
        })
    })
})