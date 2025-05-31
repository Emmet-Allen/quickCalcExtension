
// mockQuickCalc.js

// Mock versions of calculations functions that do not access the DOM
const subtractionFunction = (a, b) => a - b;
const additionFunction = (a, b) => a + b;
const divisionFunction = (a, b) => a / b;
const multiplicationFunction = (a, b) => a * b;

// Other mock calculation functions...
function factorialFunc(n) {
    if (n === 0 || n === 1) return 1;
    let result = factorialFunc(n - 1);
    return n * result;
}

function permutationFunc(valueA, valueB) {
    return factorialFunc(valueA) / factorialFunc(valueA - valueB);
}

function kPermutationNumbers(valueN, valueK) {
    return permutationFunc(valueN, valueK);
}

function gcdFunc(a, b) {
    while (b != 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function arithmeticSeriesSum(firstTerm, commonDifference, numberOfTerms) {
    return (numberOfTerms * (2 * firstTerm + (numberOfTerms - 1) * commonDifference)) / 2;
}

function geometricSequenceSum(firstTerm, commonRatio, numberOfTerms) {
    if (commonRatio === 1) return firstTerm * numberOfTerms;
    return firstTerm * (1 - Math.pow(commonRatio, numberOfTerms)) / (1 - commonRatio);
}

module.exports = {
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
};