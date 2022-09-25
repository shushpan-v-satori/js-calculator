// User clicks a number button
// + User continues to click numbers
// + Each number is added to the FIRST NUMBER
// + FIRST NUMBER is shown on the screen
// User clicks an operator button
// + OPERATOR is stored in a variable
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

// variables

let firstNumber = null;
let operator = "";
let mainOperator = "";
let secondNumber = null;
let myResult = null;
let isInputStringEmpty = true;

const availableOperators = ["-", "+", "×", "÷"];
const availableNumbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
];
const operatorEqual = "=";

//basic calculations

const sumOfNumbers = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

const differenceOfNumbers = (firstNumber, secondNumber) => {
  return firstNumber - secondNumber;
};

const multiplicationOfNumbers = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

const divisionOfNumbers = (firstNumber, secondNumber) => {
  return firstNumber / secondNumber;
};

//calculator function

const mainCalculator = (firstNumber, secondNumber, operator) => {
  if (operator == "+") {
    myResult = sumOfNumbers(firstNumber, secondNumber);
  }
  if (operator == "-") {
    myResult = differenceOfNumbers(firstNumber, secondNumber);
  }
  if (operator == "×") {
    myResult = multiplicationOfNumbers(firstNumber, secondNumber);
  }
  if (operator == "÷") {
    if (secondNumber == 0) {
      myResult = "ERR";
    } else {
      myResult = divisionOfNumbers(firstNumber, secondNumber);
    }
  }
  return myResult;
};
//end calculations

// Entries on the page
const buttons = document.querySelectorAll(".calculator__button");

const numberButton = document.querySelectorAll(".number");

const operatorButton = document.querySelectorAll(".operator");

const equalsButton = document.querySelectorAll(".operator")[4];

const miscButton = document.querySelectorAll(".misc");

const clearButton = document.querySelectorAll(".misc")[0];

const plusMinusButton = document.querySelectorAll(".misc")[1];

const percentButton = document.querySelectorAll(".misc")[2];

const inputString = document.querySelector(".input__field");

//clear action

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  inputString.innerHTML = "";
  firstNumber = null;
  secondNumber = null;
  myResult = null;
  operator = "";
  mainOperator = "";
  console.log(
    "clear" + firstNumber + secondNumber + myResult + operator + mainOperator
  );
});

//plus minus operation

//Enter the number from the keypad
const enterNumber = numberButton.forEach((digit) => {
    digit.addEventListener("click", (event) => {
    event.preventDefault();
    if (!isInputStringEmpty) {
        inputString.innerHTML = "";
    }
    inputString.innerHTML += event.target.innerHTML;
    console.log("first" + inputString.innerHTML);
  });
});

//Enter the operator on a keypad, store the number and operator, cleanup entry field
const enterOperator = operatorButton.forEach((entry) => {
  entry.addEventListener("click", (event) => {
    event.preventDefault();
    operator = event.target.innerHTML;
    if (availableOperators.includes(operator)) {
      if (mainOperator == "") {
        firstNumber = Number(inputString.innerHTML);
        mainOperator = operator;
        console.log(firstNumber + "---1");
        console.log(mainOperator + "---1");
        inputString.innerHTML = "";
        isInputStringEmpty=true;
      } else {
        secondNumber = Number(inputString.innerHTML);
        console.log(secondNumber + "---2");
        console.log(mainOperator + "---2");
        inputString.innerHTML = mainCalculator(
          firstNumber,
          secondNumber,
          mainOperator
        );
        firstNumber = mainCalculator(firstNumber, secondNumber, mainOperator);
        mainOperator = operator;
        isInputStringEmpty=false;
      }
    } else if (operator == equalsButton.innerHTML) {
      secondNumber = Number(inputString.innerHTML);
      console.log(secondNumber + "---3");
      console.log(mainOperator + "---3");
      inputString.innerHTML = "";
      inputString.innerHTML = mainCalculator(
        firstNumber,
        secondNumber,
        mainOperator
      );
      firstNumber = null;
      secondNumber = null;
      operator = "";
      isInputStringEmpty=false;
    }
  });
});

