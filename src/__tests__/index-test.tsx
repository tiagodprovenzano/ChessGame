import React from 'react'
import TestRederer from 'react-test-renderer'
import { ChessableBoard } from '..'
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