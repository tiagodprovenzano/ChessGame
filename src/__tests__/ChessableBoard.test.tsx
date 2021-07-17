import { render } from '@testing-library/react-native'
import React from 'react'
import TestRederer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import { ChessableBoard } from '..'
import { SpaceContainer } from '../components/SpaceContainer'
import Chess from '../utils/Chess'
import { ChessContext, ChessContextInitialState } from '../utils/Context/ChessContext'
const mockGetPositionState = jest.fn(()=> jest.fn().mockImplementation((a) => console.log('no mock', a)))
// jest.mock('../utils/Chess', function() {
//     return {
//         getPositionState: function (position: number) {
//             console.log('position no mock', position)
//             return 'Q'
//         }
//     }
// })
const testRenderer = TestRederer.create(<ChessableBoard />)
const testInstance = testRenderer.root
const boardContainerArray = testInstance.findAll((n: any) => n.props.testID === 'BoardContainer' && n.type === 'View')
const boardContainer = testInstance.find((n: any) => n.props.testID === 'BoardContainer' && n.type === 'View')
const spaceContainer = testInstance.findAll((n: any) => n.props.testID === 'SpaceContainer' && n.type === 'View')[0]

afterAll(() => {
    testRenderer.unmount()
})

it('renders exactly one container', () => {

    expect(boardContainerArray.length).toBe(1)
})
it('boardContainer should be a square', () => {
    
    expect(boardContainer.props.style.width).toBe(boardContainer.props.style.height)
})
it('spaceContainer should be a square', () => {
    
    expect(spaceContainer.props.style.width).toBe(spaceContainer.props.style.height)
})
it('spaceContainer width should be 1/8 of boardCOntainer', () => {
    
    expect(spaceContainer.props.style.width).toBe(boardContainer.props.style.width / 8)
})
it('all tiles rendered', () => {
    const {getAllByText} =render(<ChessableBoard />)
    const queens = getAllByText('Q')
    const kings = getAllByText('K')
    const paws = getAllByText(/(D|L|Q|K)p/)
    const knights = getAllByText(/k(L|D)$/)
    const bishops = getAllByText(/b(L|D)$/)
    const rooks = getAllByText(/r(L|D)$/)
    expect(queens.length).toBe(2)
    expect(kings.length).toBe(2)
    expect(paws.length).toBe(16)
    expect(knights.length).toBe(4)
    expect(bishops.length).toBe(4)
    expect(rooks.length).toBe(4)
})