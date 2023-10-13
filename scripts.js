let num1 = null
let num2 = null
let operator = null
let equalNumber = null

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
  if (num2 == 0) {
    return "Error"
  }
  return num1 / num2
}

//operate function has been tested
function operate() {
  switch(operator) {
    case '+':
      console.log(add(num1, num2))
      equalNumber = add(num1, num2)
    break;
    case '-':
      console.log(subtract(num1, num2))
      equalNumber = subtract(num1, num2)
    break;
    case 'x':
      console.log(multiply(num1, num2))
      equalNumber = multiply(num1, num2)
    break;
    case '/':
      console.log(divide(num1, num2))
      equalNumber = divide(num1, num2)
    break;
    default:
      console.log("Error")
      equalNumber = "Error"
  }
}  

const display = document.getElementById("display")
const numberButton = document.querySelectorAll(".digits")
const operatorButton = document.querySelectorAll(".sign")
const clearButton = document.querySelector(".clear")
const equalButton = document.querySelector(".equals")

//will be ran when a number is pressed
numberButton.forEach(function(button) {
  button.addEventListener("click", displayButton)
  button.addEventListener("click", numberAssignment)
  button.addEventListener("click", restart)
})

//will be ran when a operator is pressed
operatorButton.forEach(function(button) {
  button.addEventListener("click", displayButton)
  button.addEventListener("click", operatorDisplay)
  button.addEventListener("click", operatorAssignment)
})

//will empty text field when clear button is pressed
clearButton.addEventListener("click", () => {
  result = ''
  display.value = result
  reset()
})

//will run the operate function
equalButton.addEventListener("click", () => {
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)
  operate()
  displayResult()
})

//function to display the button value 
function displayButton(button) {
  result = button.target.innerHTML
  display.value += result
}

function displayResult() {
  if (isNaN(equalNumber)) {
    equalNumber = "Error"
    num1 = ''
  }
  display.value = equalNumber
  num1 = equalNumber
  num2 = null
  operator = null 
}

function reset() {
  num1 = null
  num2 = null
  operator = null
}

function operatorAssignment(button) {
  operator = button.target.innerHTML
  console.log(num1 + operator + num2)
}

function numberAssignment(button) {
  const clickedNumber = button.target.innerHTML
  if (num1 == null && operator == "-") {
    num2 = ''
    num1 += -Math.abs(clickedNumber)
    operator = null
  } 
  if (equalNumber != null) {
    restart(button)
  }
  if (num1 == null) {
    num1 = clickedNumber
  } else if (num1 != null && operator == null && num2 == null) {
    num1 += clickedNumber
  } else if (num1 != null && operator != null && num2 == null) {
    num2 = clickedNumber
  } else if (num1 != null && operator != null && num2 != null) {
    num2 += clickedNumber
  }
  console.log(num1 + operator + num2) 
}

function restart(button) {
  const clickedNumber = button.target.innerHTML
  if (num1 == equalNumber && operator == null && num2 == null) { 
    result = clickedNumber
    display.value = result
    reset()
  }
}

function operatorDisplay (button) {
  if (operator != null) {
    newDisplay = button.target.innerHTML
    display.value = num1
    display.value = num1 + newDisplay
  }
}
