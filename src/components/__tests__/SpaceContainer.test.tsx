import React from 'react'
import { render }  from '@testing-library/react-native'
import { SpaceContainer } from '../SpaceContainer'
import * as spc from "../library/colorSelector"
import { ChessableBoard } from '../..'

describe('space container render properly', () => {
    it('renders with correct width and height', () => {
        const spcCallback = jest.spyOn( spc, 'colorSelector')
        const {getByTestId} = render(<SpaceContainer index={0} spaceWidth={50}/>)
        const spaceInstance = getByTestId('SpaceContainer')
        expect(spaceInstance.props.style.width).toBe(50)
        expect(spaceInstance.props.style.height).toBe(50)
        expect(spcCallback).toHaveBeenCalled()
    })
    
    it('renders with correct white color', () => {
        const {getByTestId} = render(<SpaceContainer index={0} spaceWidth={50}/>)
        const spaceInstance = getByTestId('SpaceContainer')
        expect(spaceInstance.props.style.backgroundColor).toBe('#eeeed2')
    })
    it('renders with correct black color', () => {
        const {getByTestId} = render(<SpaceContainer index={1} spaceWidth={50}/>)
        const spaceInstance = getByTestId('SpaceContainer')
        expect(spaceInstance.props.style.backgroundColor).toBe('#769656')
    })
    
    describe('renders correct identifier', () => {
        
        it('renders correct identifier, 0', () => {
            const {getByText} = render(<SpaceContainer index={0} spaceWidth={50}/>)
            const identifierIndex = getByText('A8')
            expect(identifierIndex).not.toBeUndefined()
        })
        it('renders correct identifier', () => {
            const {getByText} = render(<SpaceContainer index={1} spaceWidth={50}/>)
            const identifierIndex = getByText('A7')
            expect(identifierIndex).not.toBeUndefined()
        })
    })
    
    describe('expect to have tile view' , () => {
        it('renders a tile view', () => {
            const {getByTestId} = render(<SpaceContainer index={1} spaceWidth={50}/>)
            const tileView = getByTestId(/TileView/)
            expect(tileView).not.toBeUndefined()
        })
        it('renders all tile images', () => {
            const { getAllByTestId } = render(<ChessableBoard />)
            const images = getAllByTestId(/^TileImage/)
            // console.log(images[0].props.source)
            expect(images.length).toBe(32)
        })
        describe('renders correct Images', () => {
            
            const { getAllByTestId } = render(<ChessableBoard />)
            const blackpawns = getAllByTestId(/TileImageB(rD|rL|bD|bL|kL|kD|Q|K){1}p$/)
            const whitepaws = getAllByTestId(/TileImageW(rD|rL|bD|bL|kL|kD|Q|K){1}p$/)
            const blackrooks = getAllByTestId(/TileImageBr(L|D)$/)
            const whiterooks = getAllByTestId(/TileImageWr(L|D)$/)
            const blackknights = getAllByTestId(/TileImageBk(L|D)$/)
            const whiteknights = getAllByTestId(/TileImageWk(L|D)$/)
            const blackbishops = getAllByTestId(/TileImageBb(L|D)$/)
            const whitebishops = getAllByTestId(/TileImageWb(L|D)$/)
            const blackkings = getAllByTestId(/TileImageBK$/)
            const whitekings = getAllByTestId(/TileImageWK$/)
            const blackqueens = getAllByTestId(/TileImageBQ$/)
            const whitequeens = getAllByTestId(/TileImageWQ$/)
            
            expect(blackpawns.length).toBe(8)
            expect(blackpawns[0].props.source.testUri).toMatch(/blackPawn.png/)
            
            expect(whitepaws.length).toBe(8)
            expect(whitepaws[0].props.source.testUri).toMatch(/whitePawn.png/)
            
            expect(blackrooks.length).toBe(2)
            expect(blackrooks[0].props.source.testUri).toMatch(/blackRook.png/)
            
            expect(whiterooks.length).toBe(2)
            expect(whiterooks[0].props.source.testUri).toMatch(/whiteRook.png/)
            
            expect(blackknights.length).toBe(2)
            expect(blackknights[0].props.source.testUri).toMatch(/blackKnight.png/)
            
            expect(whiteknights.length).toBe(2)
            expect(whiteknights[0].props.source.testUri).toMatch(/whiteKnight.png/)
            
            expect(blackbishops.length).toBe(2)
            expect(blackbishops[0].props.source.testUri).toMatch(/blackBishop.png/)
            
            expect(whitebishops.length).toBe(2)
            expect(whitebishops[0].props.source.testUri).toMatch(/whiteBishop.png/)
            
            expect(blackkings.length).toBe(1)
            expect(blackkings[0].props.source.testUri).toMatch(/blackKing.png/)
            
            expect(whitekings.length).toBe(1)
            expect(whitekings[0].props.source.testUri).toMatch(/whiteKing.png/)
            
            expect(blackqueens.length).toBe(1)
            expect(blackqueens[0].props.source.testUri).toMatch(/blackQueen.png/)
            
            expect(whitequeens.length).toBe(1)
            expect(whitequeens[0].props.source.testUri).toMatch(/whiteQueen.png/)
        })
    })
})