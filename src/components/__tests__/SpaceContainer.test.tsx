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
            const tileView = getByTestId('TileView')
            expect(tileView).not.toBeUndefined()
        })
        it('renders all tile images', () => {
            const { getAllByTestId } = render(<ChessableBoard />)
            const images = getAllByTestId(/^TileImage/)
            console.log(images[0].props.source)
            expect(images.length).toBe(32)
        })
        describe('renders correct Images', () => {
            
            const { getAllByTestId } = render(<ChessableBoard />)
            const pawns = getAllByTestId(/p$/)
            expect(pawns.length).toBe(16)
            expect(pawns[0].props.source.testUri).toMatch(/(blackPawn.png|whitePawn.png)/)
        })
    })
})