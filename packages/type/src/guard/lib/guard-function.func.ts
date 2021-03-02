import { Func } from '../../lib/func.type';
/**
 * Guard the `func` value to be `Func` type.
 * @param func `Func` type value to guard.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0&ssl=2&ssc=1&pln=2&pc=96#code/C4TwDgpgBAYgrgOwMbAJYHsEBVzQLxQAUAdKWAIYBO5AtgFxTkIgCUUeAfI8wNwBQSTAGdgUAOZwqAE3jI0mdkQBmiJA1koM2XCwYrkUVENir52yOy6hI6JVH1J2eAgHIHZl-wHDRAIQDy-gAyAKIAggByAPoAamFBAKohikrkADZCEPyCCCJQvgCSAOIFEVix8UmKAJwADLUA7ACM1dUATACsACwNXbWtTQjZPlARCQCyviEAShWJyQRNbQ3DuaIAyljTpUVzVa7jIFAIcDQARhCUhkKefN5rsAkRAMJYBf7RWACaAAoh6qYtDgLARCAAPBgnc6XXTcI6cKAAbz4UFRUEoEGAcEoCCgYKgAGooB1+ABfARpchCYzPHyUOAodCUZ6U6lIlFo-EEEl8ck5PLPD6baYJV7+WbPIJhdbrRQICAAdygtLW9MZzNZQkILC8-PQaQgxDS6DEhAABgFguFonF5maADTiSSUGSAzCEGBPV7vT6-EIsHVQAD0QagwHpEDueoNRpN5pVIjVwCZLKpQgdTukGjMhAT4YZyY1aYDPGDodSGUj0cNxtNLkFEWFoqw4qikul6xcjokWbdCFzQq2zdb7ZlJbL9nSmXuQn1NbjLktoUiexCXczLuzWkIS+tq-HIcnlZnc9jdbGkxmq-XPc3fcIF6ms1tSQP5ankaAA
 */
export const guardFunction = (func: Func): func is Func => typeof func === 'function' && func instanceof Function;
