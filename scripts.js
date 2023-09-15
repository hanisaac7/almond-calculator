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
  
let num1 = undefined
let num2 = undefined
let operator = undefined
  
//operate function has been tested
function operate(num1, operator, num2) {
    switch(operator) {
      case '+':
        return add(num1, num2)
      break;
      case '-':
        return subtract(num1, num2)
      break;
      case '*':
        return multiply(num1, num2)
      break;
      case '/':
        return divide(num1, num2)
      break;
      default:
        console.log("Error")
  }
  }  
  
const display = document.getElementById("display")
const numberButton = document.querySelectorAll(".numbers")
const operatorButton = document.querySelectorAll(".operator")

function displayNumbers(button) {
    result = button.target.innerHTML
    display.value = result
    console.log(display.value)
}

numberButton.forEach(function(button) {
    button.addEventListener("click", displayNumbers)
})
