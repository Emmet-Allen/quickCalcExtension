
// mockQuickCalc.js

// Mock versions of calculations functions that do not access the DOM

function factorialFunc(value) {
    if (isNaN(value)) {
        return value;
    }
    let solution = 1;
    let number = value;
    while (number > 0) {
        solution *= number;
        number--;
    }
    return solution;
}

function permutationFunc(valueA, valueB) {
    let solution = Math.pow(valueA, valueB);
    return solution;
}

function kPermutationNumbers(valueN, valueK) {
    let top = factorialFunc(valueN);
    let bottom = factorialFunc(valueN - valueK);
    let solution = top / bottom;
    return solution;
}

function newGcdFunc(valueA, valueB) {
    let a = valueA;
    let b = valueB;
    let solution = 0;
    if (a == 0) {
        solution = b;
        return solution;
    }
    if (b == 0) {
        solution = a;
        return solution;
    }
    if (a > b || b > a) {
        while (a != b) {
            if (a > b) {
                a = a - b;
            }
            if (b > a) {
                b = b - a;
            }
        }
        solution = a;
    }
    return solution;
}

function arithmeticSeriesFunc(valueA, valueB, valueN) {
    let seriesNum = valueB - valueA;
    let seriesCount = valueN - 2;
    let start = valueB;
    while (seriesCount > 0) {
        start += seriesNum;
        seriesCount--;
    }
    let solution = start;
    return solution;
}

function arithmeticSeqFunc(valueA, valueB, valueN) {
    let top = valueN * (valueA + valueB);
    let solution = top / 2;
    return solution;
}

function euclidTripleFunc(valueM, valueN) {
    if (isNaN(valueM) || isNaN(valueN)) {
        return NaN;
    }
    let solution = [];
    let a = valueM * valueN;
    let b = (Math.pow(valueM, 2) - Math.pow(valueN, 2)) / 2;
    let c = (Math.pow(valueM, 2) + Math.pow(valueN, 2)) / 2;
    solution.push(a, b, c);
    return solution;
}

module.exports = {
    factorialFunc,
    permutationFunc,
    kPermutationNumbers,
    newGcdFunc,
    arithmeticSeqFunc,
    euclidTripleFunc,
    arithmeticSeriesFunc
};