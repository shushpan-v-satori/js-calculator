// User clicks a number button
    // User continues to click numbers
    // Each number is added to the FIRST NUMBER
    // FIRST NUMBER is shown on the screen
// User clicks an operator button
    // OPERATOR is stored in a variable
// User clicks more number buttons
    // Creating SECOND NUMBER
    // SECOND NUMBER is shown on the screen
// User clicks equals button
    // CALCULATE function uses FIRST NUMBER, SECOND NUMBER and OPERATOR to create the RESULT
// RESULT is shown on the screen


// CALCULATE FUNCTION
    // - can ADD, SUBTRACT, DIVIDE or MULTIPLY
    // - can PERCENTAGE
    // - can SQUARE ROOT
    // - can handle three or more numbers


// CODE GOES HERE
let firstNumber = Number(prompt("First number: "));
let operator = prompt("Operator: ");
let secondNumber = Number(prompt("Second number: "));

// alert(`${firstNumber} ${operator} ${secondNumber}`);

// CODE GOES HERE

const availableOperators = ["-", "+", "*", "/"]

const operatorVerification = (operator) => {
if (!availableOperators.includes(operator)) {
    alert(`Unsupported or invalid operator`);
    return;
}
}

operatorVerification(operator);

const sumOfNumbers = (firstNumber, secondNumber) => {
    const endResult=firstNumber+secondNumber;
    console.log(endResult);
    alert(`${endResult}`);
    return endResult;
}

const differenceOfNumbers = (firstNumber, secondNumber) => {
    const endResult=firstNumber-secondNumber;
    console.log(endResult);
    alert(`${endResult}`);
    return endResult;
}

const mainCalculator = (firstNumber, secondNumber, operator) => {
    if (operator==="+") {
        sumOfNumbers (firstNumber, secondNumber);
    }
    if (operator==="-"){
        differenceOfNumbers(firstNumber, secondNumber);
    }
}



mainCalculator(firstNumber, secondNumber, operator);
