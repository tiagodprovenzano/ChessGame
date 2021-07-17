import React from 'react'
import { render }  from '@testing-library/react-native'
import { SpaceContainer } from '../SpaceContainer'
import * as spc from "../library/colorSelector"

describe('space container render properly', () => {
    it('renders with correct width and height', () => {
        const spcCallback = jest.spyOn( spc, 'colorSelector')
        const {getByTestId} = render(<SpaceContainer index={0} spaceWidth={50}/>)
        const spaceInstance = getByTestId('SpaceContainer')
        expect(spaceInstance.props.style.width).toBe(50)
        expect(spaceInstance.props.style.height).toBe(50)
        expect(spaceInstance.props.style.backgroundColor).toBe('#fff')
        expect(spcCallback).toHaveBeenCalled()
    })
})