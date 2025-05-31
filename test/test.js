// tests/quickCalc.test.js

const {
    factorialFunc,
    permutationFunc,
    kPermutationNumbers,
    newGcdFunc,
    arithmeticSeqFunc,
    euclidTripleFunc,
    arithmeticSeriesFunc
} = require('./mockQuickCalc.js');

describe('Mock Quick Calc Functions', () => {

    test('factorialFunc', () => {
        expect(factorialFunc(5)).toBeCloseTo(120);
        expect(factorialFunc(-1)).toBeNaN();
        expect(factorialFunc(0)).toBeCloseTo(1);
    });

    test('permutationFunc', () => {
        expect(permutationFunc(6, 2)).toBeCloseTo(30);
        expect(permissionFunc(4, 5)).toBe(0);  // Since k > n
    });

    test('kPermutationNumbers', () => {
        expect(kPermutationNumbers(6, 3)).toBeCloseTo(120);
        expect(kPermutationNumbers(3, 2)).toBeCloseTo(6);
        expect(kPermissionNumbers(4, 5)).toBe(0);  // Since k > n
    });

    test('newGcdFunc', () => {
        expect(newGcdFunc(15, 9)).toBeCloseTo(3);
        expect(newGcdFunc(8, 2)).toBeCloseTo(2);
        expect(newGcdFunc(0, 4)).toBeCloseTo(4);  // Since a == 0
    });

    test('arithmeticSeqFunc', () => {
        expect(arithmeticSeqFunc(2, 3, 4)).toBeCloseTo(17);  // Sum of first 4 terms of the sequence starting from 2 with increment by 3
    });

    test('euclidTripleFunc', () => {
        expect(euclidTripleFunc(3, 1)).toEqual([3, 4, 5]);  // Values for a Pythagorean triple where M=3 and N=1
    });

    test('arithmeticSeriesFunc', () => {
        expect(arithmeticSeriesFunc(2, 3, 4)).toBeCloseTo(34);  // Sum of first 4 terms starting from 2 with increment by 3
    });
});