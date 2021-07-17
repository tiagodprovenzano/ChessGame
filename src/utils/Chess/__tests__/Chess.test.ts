import Board from "../Board";
import Chess from '../'

jest.mock('../Board')

describe('check if child classes are called', () => {
    it('is board class constructor called', () => {
        const chess = new Chess()
        expect(Board).toHaveBeenCalled()
    })
})