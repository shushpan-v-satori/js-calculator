// variables

let firstNumber;
let operator = "";
let mainOperator = ""; //placeholder for the operator value for multiple operations
let secondNumber;
let myResult; //result of the calculation
let isInputStringEmpty = true; //to check if there is anything stored in the main string
let isNumberClicked; //flag to identify that the previous click was a number

const basicOperators = ["-", "+", "×", "÷"];
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

const squareRoot = (firstNumber) => {
  return Math.sqrt(firstNumber);
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
  if (operator == "√") {
    myResult = squareRoot(firstNumber);
  }
  return myResult;
};
//end calculations

// Entries on the page
const buttons = document.querySelectorAll(".calculator__button");

const numberButton = document.querySelectorAll(".number");

const operatorButton = document.querySelectorAll(".operator");
console.log(operatorButton);

const squareRootButton = document.querySelectorAll(".operator")[4];

const equalsButton = document.querySelectorAll(".operator")[5];

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
  isInputStringEmpty = true;
  isNumberClicked = false;
});

//plus/minus operation

plusMinusButton.addEventListener("click", (event) => {
  event.preventDefault();
  let inputEntry = 0;
  inputEntry = Number(inputString.innerHTML) * -1;
  inputString.innerHTML = String(inputEntry);
  isNumberClicked = true;
});

//percent operation

percentButton.addEventListener("click", (event) => {
  event.preventDefault();
  let inputEntry = 0;
  inputEntry = Number(inputString.innerHTML) / 100;
  inputString.innerHTML = String(inputEntry);
  isNumberClicked = true;
});

//Enter the number from the keypad

const enterNumber = numberButton.forEach((digit) => {
  digit.addEventListener("click", (event) => {
    event.preventDefault();
    if (!isInputStringEmpty) {
      inputString.innerHTML = ""; //clenup values fromt the Input on the click of the first number
    }
    isInputStringEmpty = true;
    isNumberClicked = true;
    inputString.innerHTML += event.target.innerHTML;
    console.log("first" + inputString.innerHTML);
  });
});

//Enter the operator on a keypad, store the number and operator, perform calculation, show the result

const enterOperator = operatorButton.forEach((entry) => {
  entry.addEventListener("click", (event) => {
    event.preventDefault();
    operator = event.target.innerHTML;
    if (!isNumberClicked) { //preventing double click of the operator
        firstNumber = null;
        secondNumber = null;
        myResult = null;
        operator = "";
        mainOperator = "";
        inputString.innerHTML = "0";
        isInputStringEmpty = false;
        return;
    }
    isNumberClicked = false;
    if (basicOperators.includes(operator)) {
      if (mainOperator == "") {
        firstNumber = Number(inputString.innerHTML);
        mainOperator = operator;
        console.log(firstNumber + "---1");
        console.log(mainOperator + "---1");
        inputString.innerHTML = "";
        isInputStringEmpty = true;
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
        isInputStringEmpty = false;
      }
    } else if (operator == squareRootButton.innerHTML) {
      firstNumber = Number(inputString.innerHTML);
      mainOperator = operator;
      console.log(firstNumber + "---sr");
      console.log(mainOperator + "---sr");
      inputString.innerHTML = mainCalculator(
        firstNumber,
        firstNumber,
        mainOperator
      );
      firstNumber = null;
      secondNumber = null;
      mainOperator = "";
      operator = "";
      isInputStringEmpty = false;
    } else if (operator == equalsButton.innerHTML) {
      secondNumber = Number(inputString.innerHTML);
      console.log(secondNumber + "---4");
      console.log(mainOperator + "---4");
      inputString.innerHTML = "";
      inputString.innerHTML = mainCalculator(
        firstNumber,
        secondNumber,
        mainOperator
      );
      firstNumber = null;
      secondNumber = null;
      mainOperator = "";
      operator = "";
      isInputStringEmpty = false;
    }
  });
});
