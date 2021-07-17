import React from "react";
import { render } from "@testing-library/react-native";
import Chess from "../../utils/Chess";
import { ChessableBoard } from "../.."

jest.mock('../../utils/Chess')

describe("testing ChessableBoard", ()=> {
    describe('testing ChessContext', () => {
        it('shold call Chess, Board and Tile class constructors', () => {
            render(<ChessableBoard />)
            new Chess()
            expect(Chess).toHaveBeenCalled()
        })
    
    })
})