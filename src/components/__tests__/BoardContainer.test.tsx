import React from 'react'
import {render, fireEvent} from '@testing-library/react-native'
import { BoardContainer } from '../BoardContainer'
import * as rsz from '../library/resizePressedCallback'
// import * as spc from '../library/spaceLayoutCallback'

describe('BoardContainer should render properly', () => {
    
    it('should render 64 spaces', () => {
        const { getAllByTestId } = render(<BoardContainer />)
        const spaces = getAllByTestId('SpaceContainer')
        expect(spaces.length).toBe(64);
    })
    it('button is rendered', () => {
        const { getByTestId} = render(<BoardContainer />)
        const button = getByTestId('ResizeButton');
        expect(button).not.toBeUndefined()
    })
    
    it('should resize when resizeButtonCLicked', () => {
        const {getByTestId, getAllByTestId} = render(<BoardContainer />)
        const board = getByTestId('BoardContainer');
        const resizeButton = getByTestId('ResizeButton');
        const spaceContainer = getAllByTestId('SpaceContainer')[0];
        const rszFn = jest.spyOn(rsz, 'resizePressedCallback').mockReturnValue(100)
        fireEvent.press(resizeButton)
        // const spcCallback = jest.spyOn(spc, 'spaceLayoutCallback')
        
        expect(board.props.style.width).toBe(100)
        expect(board.props.style.height).toBe(100)
        expect(spaceContainer.props.style.width).toBe(100/8)
        expect(spaceContainer.props.style.height).toBe(100/8)
        expect(rszFn).toHaveBeenCalledTimes(1)
        // expect(spcCallback).toHaveBeenCalledTimes(64)
    })
})    
