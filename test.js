//Number Inputs
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let thirdNumber = document.getElementById("thirdNumber");

// Calculate Button
const calculate = document.getElementById("Calculate");

// Math Formula Named Radio Buttons
let subtract = document.getElementById("subtraction");
let addition = document.getElementById("addition");
let factorial = document.getElementById("factorial");
let kPermutation = document.getElementById("kPermutations");

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

factorial.addEventListener("click", async () => {
    secondInput.style.visibility = 'hidden';
    thirdInput.style.visibility = 'hidden';
});

kPermutation.addEventListener("click", async () => {
    secondInput.style.visibility = 'visible';
    thirdInput.style.visibility = 'hidden';
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
    if (factorial.checked) {
        solution = factorialFunc( parseInt(firstNumber.value) );
    }
    if(kPermutation.checked){
        solution  = kPermutationNumbers( parseInt(firstNumber.value) , parseInt(secondNumber.value));
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

function factorialFunc(value){
    let solution = 1;
    let number = value; 
    while(number > 0){
        solution *= number;
        number--;
    }
    return solution;
}

function kPermutationNumbers(valueN, valueK){
    let top = factorialFunc( valueN );
    let bottom = factorialFunc ( valueN - valueK) 
    let solution = top / bottom
    return solution;
}

function displayResult(solution){
    return (document.getElementById("ans").textContent = "Result is " + solution);
}
