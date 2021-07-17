import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { ResizeButton } from '../ResizeButton'
import TestRenderer from 'react-test-renderer'
import * as lib from "../library/resizePressedCallback";

// import jest from 'jest'
describe('Checking if button is redered properly', () => {
    it('button is rendered with resize Text', () => {
        const { getByText } = render(<ResizeButton/>)
        const a = getByText('Resize')
        expect(a).not.toBeUndefined()
    })
    
    it('when clicked it triggers effects', () => {
        const mockFn = jest.fn()
        const spyFn = jest.spyOn(lib, 'resizePressedCallback').mockReturnValue(100)
        const { getByTestId } = render(<ResizeButton setWidth={mockFn}/>)
        const touchable = getByTestId('ResizeButton')
        fireEvent.press(touchable)
        expect(spyFn).toHaveBeenCalled()
        expect(spyFn).toHaveLastReturnedWith(100)
        expect(mockFn).toHaveBeenCalledWith(100)
    })
})