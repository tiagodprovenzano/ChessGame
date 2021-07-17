import {getIndexIdentifier} from '../getIndexIdentifier'

describe('checking if index returns correct space identifier', () => {
    it('if index === 0, returns A1', () => {
        expect(getIndexIdentifier(0)).toBe('A8')
    })
    
    it('if index === 1, returns A2', () => {
        expect(getIndexIdentifier(1)).toBe('A7')
    })

    it('if index === 8, returns B1', () => {
        expect(getIndexIdentifier(8)).toBe('B8')
    })

    it('if index === 19, returns C3', () => {
        expect(getIndexIdentifier(19)).toBe('C5')
    })
    it('if index === 28, returns D4', () => {
        expect(getIndexIdentifier(28)).toBe('D4')
    })
})