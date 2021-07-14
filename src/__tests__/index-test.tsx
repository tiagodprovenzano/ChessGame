import React from 'react'
import TestRederer from 'react-test-renderer'
import { ChessableBoard } from '..'
const testRenderer = TestRederer.create(<ChessableBoard />)
const testInstance = testRenderer.root
const boardContainerArray = testInstance.findAll((n: any) => n.props.testID === 'BoardContainer' && n.type === 'View')
const boardContainer = testInstance.find((n: any) => n.props.testID === 'BoardContainer' && n.type === 'View')

it('renders exactly one container', () => {

    expect(boardContainerArray.length).toBe(1)
})
it('boardContainer should be a square', () => {
    
    console.log(boardContainer.props.style.width, boardContainer.props.style.height)
    expect(boardContainer.props.style.width).toBe(boardContainer.props.style.height)
})