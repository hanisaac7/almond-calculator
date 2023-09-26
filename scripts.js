//operations have been tested
function add(num1, num2) {
    return num1 + num2
  }
  
  function subtract (num1, num2) {
    return num1 - num2
  }
  
  function multiply (num1, num2) {
    return num1 * num2
  }
  
  function divide(num1, num2) {
    return num1 / num2
  }
  

  
//operate function has been tested
function operate() {
    switch(operator) {
      case '+':
        console.log(add(num1, num2))
      break;
      case '-':
        console.log(subtract(num1, num2))
      break;
      case 'x':
        console.log(multiply(num1, num2))
      break;
      case '/':
        console.log(divide(num1, num2))
      break;
      default:
        console.log("Error")
  }
  }  

  
const display = document.getElementById("display")
const numberButton = document.querySelectorAll(".digits")
const operatorButton = document.querySelectorAll(".sign")
const clearButton = document.querySelector(".clear")
const equalButton = document.querySelector(".equals")

let num1 = ''
let num2 = ''
let operator = ''

//function to display the button value 
function displayButton(button) {
    if (isNaN(operatorButton) == true) {
      result = button.target.innerHTML
      display.value += result
      console.log(display.value)
    } else {
      result = parseFloat(button.target.innerHTML)
      display.value += result
      console.log(display.value)
    }
}

//getting the value of display into the operate parameter. 


function updateOperand1(button) {
  operand1 = parseFloat(button.target.innerHTML)
  num1 = operand1
  console.log(operand1)
}

function updateOperand2(button) {
  operand2 = parseFloat(button.target.innerHTML)
  num2 = operand2
  console.log(operand2)
}

function updateOperator(button) {
  operatorValue = button.target.innerHTML
  operator = operatorValue
  console.log(operator)
}

//will empty text field when clear button is pressed
clearButton.addEventListener("click", () => {
  result = ''
  display.value = result
  console.log(display.value)
})

//will be ran when a number is pressed
numberButton.forEach(function(button) {
  button.addEventListener("click", displayButton)
  button.addEventListener("click", updateOperand1)
})

//will be ran when a number is pressed
numberButton.forEach(function(button) {
  button.addEventListener("click", displayButton)
  button.addEventListener("click", updateOperand2)
})

//will be ran when a operator is pressed
operatorButton.forEach(function(button) {
  button.addEventListener("click", displayButton)
  button.addEventListener("click", updateOperator)
})

//will run the operate function
equalButton.addEventListener("click", operate)

