import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { ResizeButton } from '../ResizeButton'
import TestRenderer from 'react-test-renderer'
import * as lib from "../library/resizePressedCallback";
import Slider from "@react-native-community/slider";
import { Dimensions } from 'react-native';

// import jest from 'jest'
describe('Checking if button is redered properly', () => {
    it('button is rendered with resize Text', () => {
        const { getByText } = render(<ResizeButton width={50}/>)
        const a = getByText('Resize')
        expect(a).not.toBeUndefined()
    })
    
    it('when clicked it triggers effects', () => {
        const mockFn = jest.fn()
        const spyFn = jest.spyOn(lib, 'resizePressedCallback').mockReturnValue(100)
        const { getByTestId } = render(<ResizeButton width={50} setWidth={mockFn}/>)
        const touchable = getByTestId('ResizeButton')
        fireEvent.press(touchable)
        expect(spyFn).toHaveBeenCalled()
        expect(spyFn).toHaveLastReturnedWith(100)
        expect(mockFn).toHaveBeenCalledWith(100)
    })
    it('resize Slider will trigger onSlideEnd function', () => {
        const mockFn = jest.fn()
        const sliderInstance = TestRenderer.create(<Slider onSlidingComplete={mockFn}/>).root
        sliderInstance.props.onSlidingComplete()
        expect(mockFn).toHaveBeenCalled()
    })
    it('when width === screenWidth, resize button not shown', () => {
        const mockFn = jest.fn()
        const testInstance = TestRenderer.create(<ResizeButton width={Dimensions.get('window').width} setWidth={mockFn}/>).root
        const resizeInstance = testInstance.findAllByProps({testID: 'ResetButton'})
        expect(resizeInstance.length).toBe(0)
    })

    it('when width !== screenWidth, resize button shown', () => {
        const mockFn = jest.fn()
        const {getAllByTestId} = render(<ResizeButton width={50} setWidth={mockFn}/>)
        const resizeInstance = getAllByTestId('ResetButton')
        expect(resizeInstance.length).toBe(1)
    })
})