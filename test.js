//Number Inputs
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let thirdNumber = document.getElementById("thirdNumber");

// Calculate Button
const calculate = document.getElementById("Calculate");

// Math Formula Named Radio Buttons
let subtract = document.getElementById("subtraction");
let addition = document.getElementById("addition");
let division = document.getElementById("division");
let multiplication = document.getElementById("multiplication");
let factorial = document.getElementById("factorial");
let kPermutation = document.getElementById("kPermutations");
let greatestCD = document.getElementById("GCD");
let arithmeticSeries = document.getElementById("ArithmeticSeries")
let arithmeticSequence = document.getElementById("ArithmeticSequence")

//Input Boxes
let secondInput = document.getElementById("secondNumber")
let thirdInput = document.getElementById("thirdNumber")

//Hide buttons via async function
addition.addEventListener("click", async () => {
    thirdNumber.style.visibility = 'hidden';
    secondInput.style.visibility = 'visible';
});

subtract.addEventListener("click", async () => {
    thirdNumber.style.visibility = 'hidden';
    secondInput.style.visibility = 'visible';
});
multiplication.addEventListener("click", async () => {
    thirdNumber.style.visibility = 'hidden';
    secondInput.style.visibility = 'visible';
});

division.addEventListener("click", async () => {
    thirdNumber.style.visibility = 'hidden';
    secondInput.style.visibility = 'visible';
});

factorial.addEventListener("click", async () => {
    secondInput.style.visibility = 'hidden';
    thirdInput.style.visibility = 'hidden';
});

kPermutation.addEventListener("click", async () => {
    secondInput.style.visibility = 'visible';
    thirdInput.style.visibility = 'hidden';
});

greatestCD.addEventListener("click", async () => {
    secondInput.style.visibility = 'visible';
    thirdInput.style.visibility = 'hidden';
});

arithmeticSeries.addEventListener("click", async () => {
    secondInput.style.visibility = 'visible';
    thirdInput.style.visibility = 'visible';
});

arithmeticSequence.addEventListener("click", async () => {
    secondInput.style.visibility = 'visible';
    thirdInput.style.visibility = 'visible';
});


//Event Listener To Calculate Formula with given inputs
calculate.addEventListener("click", operation);

// Checks which Formula was choosen and performs calculation
async function operation() {
    let solution;
    if (addition.checked) {
        solution = addNumbers();
     }
     if (subtract.checked) {
         solution = subNumbers();
     }
    if (multiplication.checked) {
        solution = multiNumbers();
    }
    if (division.checked) {
        solution = divNumbers();
    }
    if (factorial.checked) {
        solution = factorialFunc(parseInt(firstNumber.value));
    }
    if (kPermutation.checked) {
        solution = kPermutationNumbers(parseInt(firstNumber.value), parseInt(secondNumber.value));
    }
    if (greatestCD.checked) {
        solution = gcdFunc(parseInt(firstNumber.value), parseInt(secondNumber.value));
    }
    if (arithmeticSeries.checked){
        solution = arithmeticSeriesFunc(parseInt(firstNumber.value), parseInt(secondNumber.value), parseInt(thirdNumber.value));
    }
    if(arithmeticSequence.checked){
        solution = arithmeticSeqFunc(parseInt(firstNumber.value), parseInt(secondNumber.value), parseInt(thirdNumber.value));
    }
    return displayResult(solution);
}


function addNumbers() {
    let solution = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    return solution;
}

function subNumbers() {
    let solution = parseInt(firstNumber.value) - parseInt(secondNumber.value);
    return solution;
}

function multiNumbers() {
    let solution = parseInt(firstNumber.value) * parseInt(secondNumber.value);
    return solution;
}

function divNumbers() {
    let solution = parseInt(firstNumber.value) / parseInt(secondNumber.value);
    return solution;
}

function factorialFunc(value) {
    let solution = 1;
    let number = value;
    while (number > 0) {
        solution *= number;
        number--;
    }
    return solution;
}

function kPermutationNumbers(valueN, valueK) {
    let top = factorialFunc(valueN);
    let bottom = factorialFunc(valueN - valueK)
    let solution = top / bottom
    return solution;
}

function gcdFunc(valueA, valueB) {
    let a = valueA;
    let b = valueB;
    if (b == 0) {
        var solution = a;
    }
    if (a == 0) {
        var solution = b
    }
    else {
        while (b > 0) {
            let remainder = valueA % valueB;
            a = b;
            b = remainder;
        }
        var solution = a;
    }
    return solution;
}

function arithmeticSeriesFunc(valueA, valueB, valueN){
    let seriesNum = valueB - valueA;
    let seriesCount = valueN - 2;
    let start = valueB;
    while(seriesCount > 0){
        start += seriesNum;
        seriesCount--;
    } 
    let solution = start;
    return solution;
}

function arithmeticSeqFunc(valueA, valueB, valueN){
    let top = valueN * (valueA + valueB);
    let solution = top / 2;
    return solution;
}

function displayResult(solution) {
    return (document.getElementById("ans").textContent = "Result is " + solution);
}

