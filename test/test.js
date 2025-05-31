// tests/quickCalc.test.js

const {
    subtractionFunction,
    additionFunction,
    divisionFunction,
    multiplicationFunction,
    factorialFunc,
    permutationFunc,
    kPermutationNumbers,
    gcdFunc,
    arithmeticSeriesSum,
    geometricSequenceSum
} = require('../mockQuickCalc.js');

describe('Mock Quick Calc Functions', () => {
    test('subtractionFunction', () => {
        expect(subtractionFunction(5, 3)).toBe(2);
    });

    test('additionFunction', () => {
        expect(additionFunction(5, 3)).toBe(8);
    });

    test('divisionFunction', () => {
        expect(divisionFunction(10, 2)).toBe(5);
    });

    test('multiplicationFunction', () => {
        expect(multiplicationFunction(4, 3)).toBe(12);
    });

    test('factorialFunc', () => {
        expect(factorialFunc(5)).toBe(120);
    });

    test('permutationFunc', () => {
        expect(permutationFunc(6, 2)).toBe(30);
    });

    test('kPermutationNumbers', () => {
        expect(kPermutationNumbers(6, 3)).toBe(24);
    });

    test('gcdFunc', () => {
        expect(gcdFunc(15, 9)).toBe(3);
    });

    test('arithmeticSeriesSum', () => {
        expect(arithmeticSeriesSum(2, 3, 4)).toBe(34);
    });

    test('geometricSequenceSum', () => {
        expect(geometricSequenceSum(1, 0.5, 4)).toBeCloseTo(1.875);
    });
});