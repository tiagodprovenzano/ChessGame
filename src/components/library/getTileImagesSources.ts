import {ITileType} from '../../utils/Chess/Tiles/types/ITileType';

const blackPawn = require('../../../assets/blackPawn.png');
const whitePawn = require('../../../assets/whitePawn.png');

const blackKing = require('../../../assets/blackKing.png');
const whiteKing = require('../../../assets/whiteKing.png');

const blackQueen = require('../../../assets/blackQueen.png');
const whiteQueen = require('../../../assets/whiteQueen.png');

const blackRook = require('../../../assets/blackRook.png');
const whiteRook = require('../../../assets/whiteRook.png');

const blackKnight = require('../../../assets/blackKnight.png');
const whiteKnight = require('../../../assets/whiteKnight.png');

const blackBishop = require('../../../assets/blackBishop.png');
const whiteBishop = require('../../../assets/whiteBishop.png');

export const getTileImagesSources = (tileType: ITileType, color: 'B' | 'W') => {
  return {
    K: {
      B: blackKing,
      W: whiteKing,
    },
    Kp: {
      B: blackPawn,
      W: whitePawn,
    },
    Q: {
      B: blackQueen,
      W: whiteQueen,
    },
    Qp: {
      B: blackPawn,
      W: whitePawn,
    },
    rL: {
      B: blackRook,
      W: whiteRook,
    },
    rLp: {
      B: blackPawn,
      W: whitePawn,
    },
    rD: {
      B: blackRook,
      W: whiteRook,
    },
    rDp: {
      B: blackPawn,
      W: whitePawn,
    },
    kD: {
      B: blackKnight,
      W: whiteKnight,
    },
    kDp: {
      B: blackPawn,
      W: whitePawn,
    },
    kL: {
      B: blackKnight,
      W: whiteKnight,
    },
    kLp: {
      B: blackPawn,
      W: whitePawn,
    },
    bL: {
      B: blackBishop,
      W: whiteBishop,
    },
    bLp: {
      B: blackPawn,
      W: whitePawn,
    },
    bD: {
      B: blackBishop,
      W: whiteBishop,
    },
    bDp: {
      B: blackPawn,
      W: whitePawn,
    },
  }[tileType][color];
};
